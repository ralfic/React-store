import { setProducts } from '../store/slices/productsSlice';
import { IProductsResponse, ParamsType } from '../types';
import { api } from './api';

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page = 1, limit = 8, category } = params || {};
        return {
          url: `products${category ? '/category' : ''}`,
          params: {
            page,
            limit,
            type: category,
          },
        };
      },
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          const data = result.data;

          dispatch(setProducts(data.products));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
