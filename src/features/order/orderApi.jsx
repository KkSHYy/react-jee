import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/api_urls';



export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/orders` }),

  endpoints: (builder) => ({


    getOrderById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['Orders']
    }),

    addOrder: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Orders']
    }),

    getOrderByUser: builder.query({
      query: (token) => ({
        url: '/users',
        headers: {
          Authorization: token
        },
        method: 'GET',
      }),
      providesTags: ['Orders']
    }),




  })




});

export const { useAddOrderMutation, useGetOrderByIdQuery, useGetOrderByUserQuery } = orderApi;