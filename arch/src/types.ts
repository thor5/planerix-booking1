// import { DateTime } from 'luxon'

export type SpaceType = {
  id: string;
  //date
  created: string;
  //date
  modified: string
  idExt: string;
  title: string;
  description: string;
  usage: string;
  pricePerMetr?: number | null;
  // rent: 'short' | 'long';
  rent: number;
  perHour?: number | null;
  fullName?: string | null;
  email?: string | null;
  booked: boolean;
  //date
  startRent?: string; 
  // date
  endRent?: string;
}

export type BookingType = {
  // id from space
  id: string;
  // date: DateTime;
  firstName: string;
  lastName: string;
  email: string;
  // selectedTimeSlotStart: number;
  // duration: number;
  spaceId: string | undefined;
}

export type FormInitialValues = {
  firstName: string
  lastName: string
  email: string
  duration: number
}

export type SpaceArch = {
  id: string
  node: any
  usage: string
}

export type Action = {
  //     newBookingsList: BookingType[]
  type: 'SET_SPACES' | 'INIT_BOOKINGS' | 'SELECT_SPACE' | 'SET_USED_SPACES';
  spaces?: SpaceType[];
  space?: SpaceType;
  bookings?: BookingType[];
  //     spaceId: string,
  //     booking: BookingType,
  //     newTimeSlot: number,
  //     newDate: DateTime,

}
export type BookingsState = {
  spaces: SpaceArch[];
  selectedSpace: SpaceArch | null;
  bookings: BookingType[];
  // usedSpaces: SpaceType[]

  // loading: boolean,
  // selectedDate: DateTime,
  // selectedTimeSlot: number,
  // usedSlots: boolean[],

}