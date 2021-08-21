import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';

import bookings from './bookings'
import { BookingsState } from '../types'
// import  { FloorState } from './floor'

declare var window: any
const reducers = combineReducers({ bookings })
export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export type RootState = {
  bookings: BookingsState
  // floor: FloorState
}