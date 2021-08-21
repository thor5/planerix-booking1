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

      serializableCheck: false,

    }).concat(floorApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


