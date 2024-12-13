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
  categories: TCategory[];
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
  sort: string;
}

export type ParamsFiltersType = Partial<IFilters>;

export type ParamsProductsType = Partial<{ limit: number; random: boolean }>;

export type TCategory =
  | 'tv'
  | 'audio'
  | 'laptop'
  | 'mobile'
  | 'gaming'
  | 'appliances';
