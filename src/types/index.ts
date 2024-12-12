export interface IProduct {
  brand: string;
  category: string;
  color: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  model: string;
  price: number;
  title: string;
}

export interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}

export interface IProductsResponse {
  products: IProduct[];
  status: string;
  message: string;
}

export interface IFilters {
  page: number;
  limit: number;
  category: TCategory | null;
}

export type ParamsType = Partial<IFilters>;

export type TCategory =
  | 'tv'
  | 'audio'
  | 'laptop'
  | 'mobile'
  | 'gaming'
  | 'appliances';

export type TSort = 'desc' | 'asc';
