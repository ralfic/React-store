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
  quantity?: number;
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
  firstName?: string;
  lastName?: string;
}

export interface IOrder {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  country: string;
  stressAddress: string;
  town_city: string;
  state?: string;
  zipCode?: number;
  cardNumber: string;
  cvcCode: number;
  ExpirationDate: string;
  id: string;
  dateCreated: string;
  items: IOrderItem[];
  totalPrice: number;
}

export interface IOrderItem {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

export type TCategory =
  | 'tv'
  | 'audio'
  | 'laptop'
  | 'mobile'
  | 'gaming'
  | 'appliances';
