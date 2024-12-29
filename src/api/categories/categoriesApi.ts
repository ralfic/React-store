import { CategoriesApiResponse } from './types';
import { api } from '../api';
import { PRODUCT_API_URL } from '@/constants/constants';

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: PRODUCT_API_URL + `products/category`,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
