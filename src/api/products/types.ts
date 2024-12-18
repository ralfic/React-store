import { IProduct, IFilters } from '@/types';
import { TypeStatus } from '../types';

export interface IProductsResponse {
  products: IProduct[];
  status: TypeStatus;
  message: string;
}

export interface ISingleProductResponse {
  product: IProduct;
  status: TypeStatus;
  message: string;
}

export type ParamsFiltersType = Partial<IFilters>;

export type ParamsProductsType = Partial<{ limit: number; random: boolean }>;
