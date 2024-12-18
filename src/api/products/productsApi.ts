import getRandomCategory from '@/helpers/getRandomCategory';
import { setProducts } from '../../store/slices/products/productsSlice';
import {
  IProductsResponse,
  ISingleProductResponse,
  ParamsFiltersType,
  ParamsProductsType,
} from './types';
import { api } from '../api';

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByFilters: builder.query<IProductsResponse, ParamsFiltersType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page = 1, limit = 8, category, sort } = params || {};
        if (sort) {
          return {
            url: `products${category ? '/category' : ''}`,
            params: {
              page,
              limit,
              type: category,
              sort,
            },
          };
        }
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
    getProducts: builder.query<IProductsResponse, ParamsProductsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const randomCategory = getRandomCategory();
        const { limit = 8, random } = params || {};
        return {
          url: `products${random ? `/category?type=${randomCategory}` : ''}`,
          params: {
            limit,
          },
        };
      },
    }),
    getSingleProduct: builder.query<ISingleProductResponse, string | undefined>(
      {
        keepUnusedDataFor: 0,
        query: (id) => {
          return {
            url: `products/${id}`,
          };
        },
      }
    ),
  }),
});
export const {
  useGetProductsByFiltersQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = productsApi;
