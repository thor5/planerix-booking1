import { Action, BookingType, Space } from "../../types"



export const setSpaces = (spaces: Space[]): Action => {
  return { type: 'SET_SPACES', spaces }
}

export const initBookings = (bookings: BookingType[]): Action => {
  return { type: 'INIT_BOOKINGS', bookings }
}

export const selectSpace = (space: Space) => {
  return { type: 'SELECT_SPACE', space }
}

// export const unSelectSpace = () => {
//   return { type: UNSELECT_SPACE }
// }

// export const startSaveBooking = () => {
//   return { type: START_SAVE_BOOKING }
// }

// export const endSaveBooking = (newBookingsList: BookingType[]) => {
//   return { type: END_SAVE_BOOKING, newBookingsList }
// }

// export const saveBooking = (newBooking: BookingType, bookings: BookingType[]) => (dispatch: any) => {
//   dispatch(startSaveBooking());
//   let newBookingsList = bookings.filter(booking => booking.spaceId === newBooking.spaceId);

//   newBookingsList.push(newBooking);

//   axios.put(`/v2/space/${newBooking.spaceId}/custom-field/properties.customFields.bookings`, { bookings: newBookingsList }).then((response: any) => {
//       dispatch(endSaveBooking(newBookingsList));
//   });
// }

// export const updateBooking = (updatedBooking: BookingType, bookings: BookingType[]) => (dispatch: any) => {
//   dispatch(startSaveBooking());
//   let newBookingsList = bookings.filter(booking => booking.spaceId === updatedBooking.spaceId)
//       .filter(booking => booking.id !== updatedBooking.id);

//   newBookingsList.push(updatedBooking);

//   axios.put(`/v2/space/${updatedBooking.spaceId}/custom-field/properties.customFields.bookings`, { bookings: newBookingsList }).then((response: any) => {
//       dispatch(endSaveBooking(newBookingsList));
//   });
// }

// export const deleteBooking = (removeBooking: BookingType, bookings: BookingType[]) => (dispatch: any) => {
//   dispatch(startSaveBooking());
//   let newBookingsList = bookings.filter(booking => booking.spaceId === removeBooking.spaceId)
//       .filter(booking => booking.id !== removeBooking.id);

//   axios.put(`/v2/space/${removeBooking.spaceId}/custom-field/properties.customFields.bookings`, { bookings: newBookingsList }).then((response: any) => {
//       dispatch(endSaveBooking(newBookingsList));
//   });
// }

// export const INIT_BOOKINGS = 'INIT_BOOKINGS'

// export const SET_BOOKINGS = 'SET_BOOKINGS'

// export const SET_SPACES = 'SET_SPACES'

// export const SELECT_SPACE = 'SELECT_SPACE'

// export const UNSELECT_SPACE = 'UNSELECT_SPACE'

// export const GET_FLOOR = 'GET_FLOOR'

// export const SELECT_DATE = 'SELECT_DATE'

// export const SELECT_TIME_SLOT = 'SELECT_TIME_SLOT'

// export const START_SAVE_BOOKING = 'START_SAVE_BOOKING'

// export const END_SAVE_BOOKING = 'END_SAVE_BOOKING'