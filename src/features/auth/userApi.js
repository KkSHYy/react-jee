import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/api_urls';

export const userApi = createApi ({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}/users`}),

 
  endpoints: (builder) => ({

   loginUser: builder.mutation({
    query: (q) => ({
      url: '/login',
      method: 'POST',
      body: q,
    })
   }),

registerUser: builder.mutation({
  query:(q) => ({
    url: '/register',
    method: 'POST',
    body: q,
  })
}),


})

});

export const {useLoginUserMutation, useRegisterUserMutation} = userApi;