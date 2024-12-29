import { useAppSelector } from '@/store';
import { IOrderItem } from '@/types';

export default function useCreateOrder(): {
  idOrder: string;
  dateCreate: string;
  orderItems: IOrderItem[];
  totalPriceOrder: number;
} {
  const { items, totalPrice, shippingType } = useAppSelector(
    (state) => state.cart
  );

  const totalPriceOrder =
    shippingType === 'free' ? totalPrice : totalPrice + 15;

  const date = new Date();

  const dateCreate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  const idOrder = crypto.randomUUID().substring(0, 8);

  const orderItems = items.map((item) => {
    return {
      id: item.id,
      name: item.title,
      quantity: item.quantity,
      image: item.image,
    };
  });

  return { idOrder, dateCreate, orderItems, totalPriceOrder };
}
