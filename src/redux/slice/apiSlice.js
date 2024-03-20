import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: 'GET',
        url: 'product',
      }),
    }),
  }),
});
export const { useGetProductsQuery } = productsAPI;
