import { SpaceType } from "../types";

export const fillSpaceWithColor = (space: SpaceType, color?: number[]) => {
  if (space === undefined) {
    return
  }
  if (!space.node) {
    return
  }
  space.node.setHighlight({
    fill: color
  });
}

// export const aggregateUsedSpaces = (
//   // bookings: BookingType[],  selectedTimeSlot: number,
//   spaces: Space[]
// ) => {
  // if (dateSelected == null) {
  //     return [];
  // }
  // const bookingsOfDay = bookings.filter((booking: BookingType) => booking.date.isSame(dateSelected, "day"));

  // const currentSlotTime = dateSelected.startOf('day').add(8, 'hours').add(selectedTimeSlot * 30, 'minutes').add(5, "minutes");
  // const bookingsOfSlot = bookingsOfDay.filter((eachBooking: BookingType) => {
  // const eachBookingStartTime = eachBooking.date.startOf('day').add(8, 'hours').add(eachBooking.selectedTimeSlotStart * 30, 'minutes');
  // const durationInMinutes = eachBooking.duration * 30;
  // const eachBookingEndTime = eachBookingStartTime.clone().add(durationInMinutes.toString(), "minutes");

  //     return eachBookingStartTime.isBefore(currentSlotTime, "minutes") && eachBookingEndTime.isAfter(currentSlotTime, "minutes");
  // })
  // const bookingsOfSlotIDs = bookingsOfSlot.map(booking => booking.spaceId);
//   return spaces.filter(space => bookingsOfSlotIDs.includes(space.id));
// }