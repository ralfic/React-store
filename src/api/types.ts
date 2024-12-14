import { TCategory, IProduct, IFilters } from '@/types';

export interface CategoriesApiResponse {
  categories: TCategory[];
  description: string;
  status: string;
}

export interface IProductsResponse {
  products: IProduct[];
  status: string;
  message: string;
}

export interface ISingleProductResponse {
  product: IProduct;
  status: string;
  message: string;
}

export type ParamsFiltersType = Partial<IFilters>;

export type ParamsProductsType = Partial<{ limit: number; random: boolean }>;
