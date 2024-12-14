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

export interface IFilters {
  page: number;
  limit: number;
  category: TCategory | null;
  sort: string | null;
}

export type TCategory =
  | 'tv'
  | 'audio'
  | 'laptop'
  | 'mobile'
  | 'gaming'
  | 'appliances';
