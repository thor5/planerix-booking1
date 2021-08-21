import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { floorApi } from './query/floor'
import bookingReducer from './bookings'

export const store = configureStore({
  reducer: {
    [floorApi.reducerPath]: floorApi.reducer,
    bookings: bookingReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({

      serializableCheck: {
        ignoredPaths: ['booking.spaces.0.node'],
        ignoredActionPaths: ['payload.0.node'],
      }
    }).concat(floorApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// import { createStore, applyMiddleware, compose } from 'redux'
// import { combineReducers } from 'redux'
// import thunk from 'redux-thunk';

// import { bookings } from './bookings'
// import { BookingsState } from '../types'
// // import  { FloorState } from './floor'

// declare var window: any
// const reducers = combineReducers({ bookings })
// export const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunk),
//     ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
//   )
// )

// export type RootState = {
//   bookings: BookingsState
//   // floor: FloorState
// }