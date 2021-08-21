import { FC, useEffect } from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import { spaceLabelMapping } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { colorMap } from './constants'
import {
  // fetchBookingFromSpaces,
  selectSpace,
  setSpaces,
} from '../store/bookings'
import { Space } from '../types'
import { RootState } from '../store'
import { bookingsMock } from '../mock-data/bookings'

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

const sceneId = `${process.env.REACT_APP_SCENE_ID}`
const publishableToken = `${process.env.REACT_APP_PUBLISH}`

type Props = {
  sceneId?: string
}

export const Archilogic: FC<Props> = () => {
  let fp
  const store = useSelector((store: RootState) => store)
  const dispatch = useDispatch()
  // console.log(store)
  useEffect(() => {
    const container = document.getElementById('floorplan')
    fp = new FloorPlanEngine(container, startupOptions)
    fp.loadScene(sceneId, { publishableToken }).then(() => {
      dispatch(setSpaces(fp.resources.spaces))
      // dispatch(fetchBookingFromSpaces(sceneId, fp.resources.spaces))
      const spaces = fp.resources.spaces
      const spaceIds = bookingsMock.map((item) => item.spaceId)
      spaces.forEach((space) => {
        if (spaceIds.includes(space.id)) {
          space.node.setHighlight({ fill: colorMap.red })
        }
      })
      console.log(fp.resources.spaces)
      fp.on('click', (event: any) => onRoomClick(event, fp))
    })
  }, [sceneId])

  const onRoomClick = (event: any, floorPlan: any) => {
    const { spaces } = floorPlan.getResourcesFromPosition(event.pos)
    if (spaces.length === 0) return
    const foundRoom = fp.resources.spaces.find(
      ({ node }) => node.id === spaces[0].id
    )
    dispatch(selectSpace(spaces[0]))
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="subtitle1">Просмотр помещений</Typography>
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

// Repaint Spaces
//   useEffect(() => {
//     bookings.spaces.forEach((space: Space) => {
//       fillSpaceWithColor(space, undefined)
//     })

//     bookings.spaces
//       .filter(
//         (space) => space.usage === 'meet' || space.usage === 'meetingRoom'
//       )
//       .forEach((space) => {
//         if (bookings.usedSpaces.includes(space)) {
//           fillSpaceWithColor(space, colorMap.red)
//         } else {
//           fillSpaceWithColor(space, colorMap.green)
//         }
//         if (bookings.selectedSpace) {
//           fillSpaceWithColor(bookings.selectedSpace, colorMap.lightBlue)
//         }
//       })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [bookings.usedSpaces, bookings.selectedSpace])

//   const fillSpaceWithColor = (space: Space, color?: number[]) => {
//     if (space === undefined) {
//         return
//     }
//     if (!space.node) {
//         return
//     }
//     space.node.setHighlight({
//         fill: color
//     });
// }
