import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Place } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetSixthRestaurantQuery,
  usePurchaseMutation
} = api

export default api
