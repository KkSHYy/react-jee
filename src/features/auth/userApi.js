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

updateProfile: builder.mutation({
  query: (q) => ({
    url: `/${q.id}`,
    body: {
      email: q.email,
      fullname: q.fullname
    },
    headers: {
      Authorization: q.token
    },
    method: 'PATCH',
  })
}),

})

});

export const {useLoginUserMutation, useRegisterUserMutation,useUpdateProfileMutation} = userApi;