import { createSlice } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'

import { BookingsState } from '../types'

const initialState: BookingsState = {
    spaces: [],
    bookings: [],
    selectedSpace: null,
    usedSpaces: []

    // selectedDate: DateTime.now(),
    // selectedTimeSlot: 3,
    // loading: true,
    // usedSlots: new Array(SLOTS_COUNT).fill(false),
}

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        setSpaces: (state, action) => {
            state.spaces = action.payload
        },
        initBookings: (state, action) => {
            state.bookings = action.payload
        },
        selectSpace: (state, action) => {
            state.selectedSpace = action.payload
        },
        setUsedSpaces: (state, action) => {
            state.usedSpaces = action.payload
        }
    }
})

export const { setSpaces, initBookings, selectSpace, setUsedSpaces } = bookingsSlice.actions

export default bookingsSlice.reducer
// import { DateTime } from 'luxon'
// import axios from 'axios'
// import {
//     INIT_BOOKINGS, 
//     // SELECT_DATE, SELECT_TIME_SLOT, 
//     SELECT_SPACE, SET_SPACES, START_SAVE_BOOKING, END_SAVE_BOOKING, UNSELECT_SPACE
// } from './actions'
// import { Action, BookingsState } from '../types'
// import { spacesMock } from '../mock-data/bookings'

// export const SLOTS_COUNT = 22; // from 8 am to 7 pm






// export const bookings = (state = initialState, action: Action) => {
//     switch (action.type) {
//         case 'SET_SPACES':
//             return {
//                 ...state,
//                 spaces: action.spaces,
//             }
        // case 'SELECT_SPACE':
            // if (action.space?.usage !== "meet" && action.space?.usage !== "meetingRoom") return state
            // return {
            //     ...state,
            //     selectedSpace: action.space,
                // usedSlots: aggregateUsedSlots(state.bookings, state.selectedDate, action.space),
            // }
        // case 'INIT_BOOKINGS':
        //     return {
        //         ...state,
        //         bookings: action.bookings,
        //         usedSpaces: spacesMock.filter((space) => space.booked),
                // usedSpaces: aggregateUsedSpaces(action.bookings, state.selectedDate, state.selectedTimeSlot, state.spaces),
                // loading: false
            // }
        // case SELECT_TIME_SLOT:
        //     return {
        //         ...state,
        //         selectedTimeSlot: action.newTimeSlot,
        //         selectedSpace: null,
        //         usedSpaces: aggregateUsedSpaces(state.bookings, state.selectedDate, action.newTimeSlot, state.spaces)
        //     }
        // case SELECT_DATE:
        //     if (action.newDate == null) return state

        //     return {
        //         ...state,
        //         selectedDate: action.newDate,
        //         selectedSpace: null,
        //         usedSpaces: aggregateUsedSpaces(state.bookings, action.newDate, state.selectedTimeSlot, state.spaces)

        //     }

        // case UNSELECT_SPACE:
        //     return {
        //         ...state,
        //         selectedSpace: undefined,
        //         usedSlots: new Array(SLOTS_COUNT).fill(false)
        //     }
        // case END_SAVE_BOOKING:
        //     return {
        //         ...state,
        //         bookings: action.newBookingsList,
        //         usedSpaces: aggregateUsedSpaces(action.newBookingsList, state.selectedDate, state.selectedTimeSlot, state.spaces),
        //         selectedSpace: null,
        //         loading: false
        //     }
//         default:
//             return state
//     }
// }



// extract booking data from each space
// export const fetchBookingFromSpaces = (floorId: string, spaces: Space[]) => (dispatch: any) => {
//     return axios.get(`/v2/space?floorId=${floorId}&includeCustomFields=true`).then(response => {
//         const bookings = response.data.features.flatMap((feature: any) => {
//             if (feature.properties.customFields && feature.properties.customFields.bookings) {
//                 console.log(feature.properties.customFields.bookings);


//                 return feature.properties.customFields.bookings.bookings.map((booking: Booking) => {
//                     booking['spaceId'] = feature.id;
//                     booking['date'] = DateTime(booking.date);
//                     return booking;
//                 })
//             }
//         }).filter((data: any[]) => data !== undefined)
//         dispatch(initBookings(bookings));
//     }).catch(error => {
//         console.log(error)
//     })
// }

// export const selectDate = (newDate: DateTime | null) => {
//     return { type: SELECT_DATE, newDate }
// }

// export const selectTimeSlot = (newTimeSlot: number) => {
//     return { type: SELECT_TIME_SLOT, newTimeSlot }
// }



// calculate time-slots available for a specific space in a day 
// const aggregateUsedSlots = (bookings: BookingType[], dateSelected: DateTime, selectedSpace: Space | null) => {
//     if (dateSelected == null) {
//         return new Array(SLOTS_COUNT).fill(false);
//     }
// const bookingsOfDay = bookings.filter((booking: BookingType) => booking.date.isSame(dateSelected, "day") && selectedSpace && booking.spaceId === selectedSpace.id);
// return new Array(SLOTS_COUNT).fill(false).map((slot, index) => {
//     const slotTime = dateSelected.startOf('day').add(8, 'hours').add(index * 30, 'minutes').add(5, "minutes");
// const bookingFound = bookingsOfDay.find((eachBooking: BookingType) => {
//     const eachBookingStartTime = eachBooking.date;
//     const durationInMinutes = eachBooking.duration * 30;
//     const eachBookingEndTime = eachBookingStartTime.clone().add(durationInMinutes.toString(), "minutes");

//             return eachBookingStartTime.isBefore(slotTime, "minutes") && eachBookingEndTime.isAfter(slotTime, "minutes")
//         });
//         return bookingFound !== undefined;
//     });
// }

// calculate used spaces at a especific moment
// const aggregateUsedSpaces = (bookings: BookingType[], dateSelected: DateTime, selectedTimeSlot: number, spaces: Space[]) => {
//     if (dateSelected == null) {
//         return [];
//     }
//     const bookingsOfDay = bookings.filter((booking: BookingType) => booking.date.isSame(dateSelected, "day"));

//     const currentSlotTime = dateSelected.startOf('day').add(8, 'hours').add(selectedTimeSlot * 30, 'minutes').add(5, "minutes");
//     const bookingsOfSlot = bookingsOfDay.filter((eachBooking: BookingType) => {
//         const eachBookingStartTime = eachBooking.date.startOf('day').add(8, 'hours').add(eachBooking.selectedTimeSlotStart * 30, 'minutes');
//         const durationInMinutes = eachBooking.duration * 30;
//         const eachBookingEndTime = eachBookingStartTime.clone().add(durationInMinutes.toString(), "minutes");

//         return eachBookingStartTime.isBefore(currentSlotTime, "minutes") && eachBookingEndTime.isAfter(currentSlotTime, "minutes");
//     })
//     const bookingsOfSlotIDs = bookingsOfSlot.map(booking => booking.spaceId);
//     return spaces.filter(space => bookingsOfSlotIDs.includes(space.id));
// }



// export default bookings