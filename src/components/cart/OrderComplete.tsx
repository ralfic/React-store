import { Button } from '../uikit/Button';
import { Link } from 'react-router-dom';
import { useLazyGetNewOrderQuery } from '@/api/user/userApi';
import { useEffect } from 'react';
import OrderItem from './OrderItem';

interface IProps {
  currentOrderId: string | null;
}

export default function OrderComplete({ currentOrderId }: IProps) {
  const [trigger, { data }] = useLazyGetNewOrderQuery();

  useEffect(() => {
    if (currentOrderId) {
      trigger(currentOrderId);
    }
  }, [currentOrderId, trigger]);

  return (
    <div className="w-full max-w-[750px] shadow-xl py-20 px-24 mx-auto mt-20 flex flex-col gap-10 items-center justify-center">
      <div className="font-Poppins font-medium text-center">
        <span className="text-2xl text-gray-500 mb-4">Thank you! 🎉</span>
        <h2 className="text-3xl">Your order has been received</h2>
      </div>
      <ul className="flex  gap-5 ">
        {data?.items &&
          data?.items.map((item, i) => <OrderItem item={item} key={i} />)}
      </ul>
      {data && (
        <div className="flex flex-col gap-4 max-w-[300px] ">
          <div className="grid grid-cols-2 gap-8">
            <p className="font-semibold text-sm text-gray-600">Order code:</p>
            <p className="font-semibold text-sm text-nowrap">{data?.id}</p>
          </div>
          <div className="grid grid-cols-2 text-nowrap gap-8">
            <p className="font-semibold text-sm text-gray-600">Date:</p>
            <p className="font-semibold text-sm">{data?.dateCreated}</p>
          </div>
          <div className="grid grid-cols-2  gap-8">
            <p className="font-semibold text-sm text-gray-600">Total:</p>
            <p className="font-semibold text-sm">${data?.totalPrice}</p>
          </div>
        </div>
      )}
      <Link to={'/account/orders'}>
        <Button rounded className="font-normal max-w-fit ">
          Purchase history
        </Button>
      </Link>
    </div>
  );
}
