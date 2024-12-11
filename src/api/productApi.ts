import { IProduct } from '../types';
import { api } from './api';

interface IProductsResponse {
  products: IProduct[];
  status: string;
  message: string;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, null>({
      keepUnusedDataFor: 0,
      query: () => `products?limit=8`,
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
