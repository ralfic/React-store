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

export interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  remember?: boolean;
  firstName: string;
  lastName: string;
  orders: string[];
}

export type TCategory =
  | 'tv'
  | 'audio'
  | 'laptop'
  | 'mobile'
  | 'gaming'
  | 'appliances';
