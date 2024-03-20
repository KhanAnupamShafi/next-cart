import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: 'GET',
        url: 'products',
      }),
    }),
  }),
});
export const { useGetProductsQuery } = productsAPI;
