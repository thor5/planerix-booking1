import { FC, useEffect } from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import { spaceLabelMapping } from './constants'

declare var FloorPlanEngine: any

const startupOptions = {
  hideElements: [],
  panZoom: true,
  planRotation: 0,
  roomStampSize: null,
  spaceLabelMapping,
  ui: {
    menu: false,
    scale: true,
    coordinates: false,
  },
  theme: {
    background: {
      color: '#f3f5f8',
      showGrid: false,
    },
    wallContours: false,
    elements: {
      roomstamp: { showArea: false },
    },
  },
  units: {
    system: 'metric',
    digits: 0,
    roomDimensions: 'area',
  },
}
const sceneId = '360e6e00-d9f0-451f-83c1-de0594a4f599'
const publishableToken = '680e296a-254f-49b3-ba71-f56d7e20677c'
// const sceneId = `${process.env.SCENE_ID}`
// const publishableToken = `${process.env.PUBLISH}`

type Props = {
  sceneId?: string
}

export const Archilogic: FC<Props> = () => {
  let fp
  useEffect(() => {
    const container = document.getElementById('floorplan')
    fp = new FloorPlanEngine(container, startupOptions)
    console.log(fp)
    fp.loadScene(sceneId, { publishableToken }).then(() => {
      // props.setSpaces(fp.resources.spaces)
      // props.onSpacesLoaded(fp.resources.spaces)
      fp.on('click', (event: any) => onRoomClick(event, fp))
    })
  }, [sceneId])

  const onRoomClick = (event: any, floorPlan: any) => {
    const { spaces } = floorPlan.getResourcesFromPosition(event.pos)
    if (spaces.length === 0) return
    // console.log(spaces)
    const foundRoom = fp.resources.spaces.find(
      ({ node }) => node.id === spaces[0].id
    )
    console.log(foundRoom)
    // props.selectSpace(spaces[0])
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="subtitle1">hi</Typography>
      </Grid>
      <Box width="100%" height="80vh" id="floorplan"></Box>
      <Grid item>
        <Button
          onClick={() => {
            fp.exportImage({
              download: true,
              format: 'jpg',
            })
          }}
        >
          Скачать план
        </Button>
      </Grid>
    </Grid>
  )
}
