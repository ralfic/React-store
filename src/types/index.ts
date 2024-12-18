export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand: string;
  model: string;
  color?: string;
  discount?: number;
  onSale?: boolean;
  popular?: boolean;
}

export interface ICartItem extends IProduct {
  quantity: number;
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
