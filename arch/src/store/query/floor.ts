import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SpaceType } from '../../types'

export const floorApi = createApi({
  reducerPath: 'floorApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}` }),
  endpoints: (builder) => ({
    getFloorSpaces: builder.query<SpaceType[], undefined>({
      query: () => ``
    }),
    createFloorSpace: builder.mutation<SpaceType, Partial<SpaceType>>({
      query: (options) => ({
        url: '/',
        method: 'POST',
        body: options
      })
    })
  })
})

export const { useGetFloorSpacesQuery, useCreateFloorSpaceMutation } = floorApi