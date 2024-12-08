import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Place } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Place[], void>({
      query: () => 'restaurantes'
    }),
    getFirstRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getSecondRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getThirdRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getFourthRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getFifthRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getSixthRestaurant: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantListQuery,
  useGetFirstRestaurantQuery,
  useGetSecondRestaurantQuery,
  useGetThirdRestaurantQuery,
  useGetFourthRestaurantQuery,
  useGetFifthRestaurantQuery,
  useGetSixthRestaurantQuery
} = api

export default api
