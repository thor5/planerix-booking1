import { FC, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import { spaceLabelMapping } from './constants'
// import { useDispatch, useSelector } from 'react-redux'
import { colorMap } from './constants'
import {  SpaceType } from '../types'
import { RootState } from '../store'
import { fillSpaceWithColor } from './utils'
import { useGetFloorSpacesQuery } from '../store/query/floor'
import { setSpaces, selectSpace } from '../store/bookings'

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
  const {
    bookings: { selectedSpace, spaces, usedSpaces },
  } = useSelector((store: RootState) => store)
  const dispatch = useDispatch()

  const { data: savedSpaces } = useGetFloorSpacesQuery(undefined)
  // console.log(savedSpaces)
  const spaceIds = savedSpaces
    ?.filter((space) => space.booked)
    .map((space) => space.id)

  useEffect(() => {
    const container = document.getElementById('floorplan')
    refFp.current = new FloorPlanEngine(container, startupOptions)
    const fp: any = refFp.current
    // console.log(fp)
    fp.loadScene(sceneId, { publishableToken }).then(() => {
      dispatch(setSpaces(fp.resources.spaces))
      // dispatch(fetchBookingFromSpaces(sceneId, fp.resources.spaces))
      const spaces = fp.resources.spaces
      // const spaceIds = spacesMock.map((space) => space.id)
      spaces.forEach((space) => {
        if (spaceIds?.includes(space.id)) {
          space.node.setHighlight({ fill: colorMap.red })
        }
      })
      fp.on('click', (event: any) => onRoomClick(event, fp))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneId])

  const onRoomClick = (event: any, floorPlan: any) => {
    const { spaces: eventSpaces } = floorPlan.getResourcesFromPosition(
      event.pos
    )
    if (spaces.length === 0) return
    // console.log(eventSpaces, selectedSpace, spaces)
    dispatch(selectSpace(eventSpaces[0]))
  }
  // console.log(usedSpaces)

  // Repaint Spaces
  useEffect(() => {
    spaces.forEach((space: SpaceType) => {
      fillSpaceWithColor(space, undefined)
    })

    spaces
      // .filter(
      //   (space) => space.usage === 'meet' || space.usage === 'meetingRoom'
      // )
      .forEach((space) => {
        if (usedSpaces.includes(space)) {
          fillSpaceWithColor(space, colorMap.red)
        } else {
          fillSpaceWithColor(space, colorMap.green)
        }
        if (selectedSpace) {
          fillSpaceWithColor(selectedSpace, colorMap.lightBlue)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSpace])

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="subtitle1">Просмотр помещений</Typography>
      </Grid>
      <Box width="100%" height="80vh" id="floorplan"></Box>
      <Grid item>
        <Button
          onClick={() => {
            refFp.current?.exportImage({
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
