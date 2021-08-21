import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SpaceType } from '../../types'

export const floorApi = createApi({
  reducerPath: 'floorApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}` }),
  endpoints: (builder) => ({
    getFloorSpaces: builder.query<SpaceType[], undefined>({
      query: () => ``
    })
  })
})

export const { useGetFloorSpacesQuery } = floorApi