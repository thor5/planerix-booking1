import { FC, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import { spaceLabelMapping } from './constants'
import { colorMap } from './constants'
import { useGetFloorSpacesQuery } from '../store/query/floor'
import { setSpaces, selectSpace } from '../store/bookings'
import DialogForInfo from '../components/DialogForInfo'
import { FormBooking } from './FormBooking'

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

const mySceneId = `${process.env.REACT_APP_SCENE_ID}`
const publishableToken = `${process.env.REACT_APP_PUBLISH}`

type Props = {
  sceneId?: string
}

export const Archilogic: FC<Props> = ({ sceneId = mySceneId }) => {
  const refFp = useRef<any>(null)
  const dispatch = useDispatch()

  const { data: savedSpaces } = useGetFloorSpacesQuery(undefined)
  const savedSpacesIds = savedSpaces
    ?.filter((space) => space.booked)
    .map((space) => space.id)

  useEffect(() => {
    const container = document.getElementById('floorplan')
    refFp.current = new FloorPlanEngine(container, startupOptions)
    const fp: any = refFp.current

    fp.loadScene(sceneId, { publishableToken }).then(() => {
      dispatch(setSpaces(fp.resources.spaces))

      fp.resources.spaces.forEach((space) => {
        if (savedSpacesIds?.includes(space.id)) {
          space.node.setHighlight({ fill: colorMap.red })
        }
      })
      fp.on('click', (event: any) => onRoomClick(event, fp))
      fp.on('mousemove', (event) => highlightResources(event, fp))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneId])

  const onRoomClick = (event: any, floorPlan: any) => {
    const resource = floorPlan.getResourcesFromPosition(event.pos)
    if (resource?.spaces?.length === 0) return
    dispatch(selectSpace(resource.spaces[0]))
  }

  const highlightResources = (evt, fp) => {
    const pos = evt.pos
    const infoPos = [pos[0], pos[1] - 0.5]
    const { spaces, assets } = fp.getResourcesFromPosition(pos)

    highlight(spaces, 'space', [150, 200, 250])
    highlight(assets, 'asset', [250, 150, 50])
    setInfoWindow(infoPos)
  }

  let active: Record<string, any> = {}
  const highlight = (items: any[], type: string, color: string | number[]) => {
    if (!items.length) {
      if (active[type]) active[type].node.setHighlight()
      delete active[type]
      return
    }
    let item = items[0]
    if (active[type]?.id === item.id) return
    else if (active[type]) active[type].node.setHighlight()
    item.node.setHighlight({ fill: color })
    active[type] = item
  }

  function setInfoWindow(infoPos) {
    if (active.asset || active.space) {
      const assetCount = active.space.assets.length
      const html = `<b>${active.space.usage}</b><br>${assetCount} assets<br>${
        active.asset?.name || ''
      }`
      if (active.infoWindow) active.infoWindow.set({ pos: infoPos, html })
      else
        active.infoWindow = refFp.current.addInfoWindow({
          pos: infoPos,
          html,
          height: 100,
          width: 150,
          closeButton: false,
        })
    } else if (active.infoWindow) {
      active.infoWindow.remove()
      delete active.infoWindow
    }
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="subtitle1">Просмотр помещений</Typography>
      </Grid>
      <DialogForInfo
        title="Подача заявки на аренду помещения"
        content={<FormBooking />}
      >
        <Box width="100%" height="80vh" id="floorplan"></Box>
      </DialogForInfo>
      <Grid item>
        <Box>
          <Button
            onClick={() => {
              refFp.current?.exportImage({
                download: true,
                format: 'glb',
              })
            }}
          >
            Скачать план
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
