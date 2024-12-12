import { CategoriesApiResponse } from '../types';
import { api } from './api';

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: `products/category`,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
