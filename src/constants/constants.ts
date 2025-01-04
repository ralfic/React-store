import { getRndInteger } from '@/helpers/getRndInteger';

export const BD_JSON_API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;
export const PRODUCT_API_URL = import.meta.env.VITE_PRODUCTS_BASE_API_URL;

export const roots = [
  { title: 'Home', path: '/' },
  { title: 'Shope', path: '/shope' },
  { title: 'Product', path: `/product/${getRndInteger(1, 151)}` },
];
