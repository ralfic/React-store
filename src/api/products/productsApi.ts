import {
  ProductsResponse,
  SingleProductResponse,
  ParamsFiltersType,
  ParamsProductsType,
} from './types';
import { api } from '../api';
import { PRODUCT_API_URL } from '@/constants/constants';
import { setProducts } from '@/store/slices/products/products.slice';
import getRandomCategory from '@/helpers/getRandomCategory';

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByFilters: builder.query<ProductsResponse, ParamsFiltersType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page = 1, limit = 8, category, sort } = params || {};
        if (sort) {
          return {
            url: PRODUCT_API_URL + `products${category ? '/category' : ''}`,
            params: {
              page,
              limit,
              type: category,
              sort,
            },
          };
        }
        return {
          url: PRODUCT_API_URL + `products${category ? '/category' : ''}`,
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
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error(String(error));
          }
        }
      },
    }),
    getProducts: builder.query<ProductsResponse, ParamsProductsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const randomCategory = getRandomCategory();
        const { limit = 8, random } = params || {};
        return {
          url:
            PRODUCT_API_URL +
            `products${random ? `/category?type=${randomCategory}` : ''}`,
          params: {
            limit,
          },
        };
      },
    }),
    getSingleProduct: builder.query<SingleProductResponse, string | undefined>({
      keepUnusedDataFor: 0,
      query: (id) => {
        return {
          url: PRODUCT_API_URL + `products/${id}`,
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetProductsByFiltersQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = productsApi;
