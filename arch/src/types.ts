import { DateTime } from 'luxon'

export type SpaceType = {
  id: string;
  sceneId: string;
  title: string;
  description: string;
  usage: string;
  pricePerMetr?: number | null;
  rent: 'short' | 'long';
  perHour?: number | null;
  fullName?: string | null;
  email?: string | null;
  booked: boolean;
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

export type Space = {
  id: string
  node: any
  usage: string
}

export type Action = {
  //     newBookingsList: BookingType[]
      type: 'SET_SPACES' | 'INIT_BOOKINGS' | 'SELECT_SPACE';
      spaces?: Space[];
      bookings?: BookingType[];
  //     spaceId: string,
  //     booking: BookingType,
  //     newTimeSlot: number,
  //     newDate: DateTime,
      // space: Space,
  }
export type BookingsState = {
  spaces: Space[];
  bookings: BookingType[];
  // loading: boolean,
  // selectedDate: DateTime,
  // selectedTimeSlot: number,
  // usedSlots: boolean[],
  // selectedSpace: Space | null,
  // usedSpaces: Space[]
}