import { useAppDispatch } from '@/store';
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '@/store/slices/cart/cartSlice';
import { ICartItem } from '@/types';
import { RxCross2 } from 'react-icons/rx';
import ProductQuantity from './uikit/ProductQuantity';

interface IProps {
  item: ICartItem;
}

export default function FlyoutCartItem({ item }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full font-Inter border-b py-6 gap-4">
      <img className="w-24 h-24 object-contain" src={item.image} alt="" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-nowrap whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400">Model: {item.model}</p>
          <ProductQuantity
            quantityProduct={item.quantity}
            fnIncrease={() => dispatch(increaseItemQuantity(item))}
            fnDecrease={() => dispatch(decreaseItemQuantity(item))}
            type="outline"
          />
        </div>
        <div className="flex flex-col gap-2 items-end ">
          <p className="font-semibold text-sm">${item.price}</p>

          <button onClick={() => dispatch(removeItem(item))}>
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
