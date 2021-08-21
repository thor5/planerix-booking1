import { DateTime } from 'luxon'

export type SpaceType = {
  id: string;
  sceneId: string;
  spaceId: string;
  title: string;
  description: string;
  usage: string;
  pricePerMetr?: number | null;
  rent: 'shor' | 'long';
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