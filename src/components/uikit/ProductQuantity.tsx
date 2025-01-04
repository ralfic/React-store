import { useAppDispatch } from '@/store';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '@/store/slices/cart/cartSlice';
import { ICartItem } from '@/types';
import clsx from 'clsx';
import { PiMinus, PiPlus } from 'react-icons/pi';

interface IProps {
  item: ICartItem;
  type: 'solid' | 'outline';
}

export default function ProductQuantity({ item, type = 'solid' }: IProps) {
  const dispatch = useAppDispatch();

  function handleDecrease() {
    dispatch(decreaseItemQuantity(item));
  }
  function handleIncrease() {
    dispatch(increaseItemQuantity(item));
  }

  return (
    <div
      className={clsx(
        'py-1.5 px-3.5 flex rounded-md self-start',
        type === 'solid'
          ? 'bg-gray-100 gap-4 '
          : ' bg-transparent border border-black gap-3 dark:border-white'
      )}
    >
      <button
        disabled={item.quantity === 1}
        onClick={handleDecrease}
      >
        <PiMinus className="h-4 w-4" />
      </button>
      <div className="font-semibold text-center content-center">
        {item.quantity}
      </div>
      <button onClick={handleIncrease}>
        <PiPlus className="h-4 w-4" />
      </button>
    </div>
  );
}
