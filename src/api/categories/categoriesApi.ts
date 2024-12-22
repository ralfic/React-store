import { CategoriesApiResponse } from './types';
import { api } from '../api';

const BASE_URL = import.meta.env.VITE_PRODUCTS_BASE_API_URL;

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: BASE_URL + `products/category`,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
