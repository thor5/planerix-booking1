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
        ignoredActions: ['booking.spaces.0.node'],
        ignoredPaths: ['booking.spaces.0.node', 'payload.node'],
        ignoredActionPaths: ['payload.0.node', 'bookings.spaces.0.node', 'payload.0._gfx'],
      }
    }).concat(floorApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


