import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://shop.huanghanlian.com',
  }),
  tagTypes: ['Product'],
  endpoints: builder => ({}),
})

export default apiSlice
