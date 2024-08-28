import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi ({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),

 
  endpoints: (builder) => ({

   getAllProducts: builder.query({
    query: (q) => ({
      url: '/products',
      method: 'GET'
    })
   }),

getProductById: builder.query({
  query:(id) => ({
    url: '/products/',
    method: 'GET',
  })
}),

removeProductById: builder.mutation({
  query:(id) => ({
    url: `/products/${id}`,
    method: 'DELETE',
  })

})

 })

});

export const {useGetAllProductsQuery, useGetProductByIdQuery} = productApi;