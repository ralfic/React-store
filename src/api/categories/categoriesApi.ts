import { CategoriesApiResponse } from './types';
import { api } from '../api';
import { PRODUCT_API_URL } from '@/constants/constants';

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, void>({
      query: () => {
        return {
          url: PRODUCT_API_URL + `products/category`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoriesApi;
