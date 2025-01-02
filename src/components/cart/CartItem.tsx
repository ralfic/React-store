import { ICartItem } from '@/types';
import { RxCross2 } from 'react-icons/rx';
import ProductQuantity from '../uikit/ProductQuantity';
import clsx from 'clsx';
import useProduct from '@/hooks/useProduct';

interface IProps {
  item: ICartItem;
  variant?: 'flyout-cart' | 'cart';
  allowDelete?: boolean;
}

export default function CartItem({
  item,
  variant = 'cart',
  allowDelete = true,
}: IProps) {
  const { discount, removeFromCart } = useProduct(item);

  return (
    <div className="flex w-full font-Inter border-b py-6 gap-4">
      <img
        className={clsx(
          'object-contain shadow-lg  rounded-md',
          variant === 'cart' ? 'w-28 h-28' : 'w-24 h-24 '
        )}
        src={item.image}
        alt=""
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold line-clamp-2 max-w-[250px]">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 text-nowrap whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
            Model: {item.model}
          </p>
          <ProductQuantity item={item} type="outline" />
        </div>
        <div
          className={clsx(
            'flex flex-col gap-2 items-end ',
            variant === 'flyout-cart' ? 'text-sm' : 'text-base justify-center'
          )}
        >
          {discount > 0 ? (
            <div
              className={clsx(variant === 'flyout-cart' ? '' : 'flex flex-col gap-1')}
            >
              <p className="font-semibold">
                ${(item.price - discount) * item.quantity}
              </p>
              <p className="font-semibold text-gray-400 line-through">
                ${item.price * item.quantity}
              </p>
            </div>
          ) : (
            <p className="font-semibold ">${item.price * item.quantity}</p>
          )}
          {allowDelete && (
            <button
              className="flex items-center gap-2"
              onClick={removeFromCart}
            >
              <RxCross2
                className={clsx(
                  variant === 'cart'
                    ? 'text-gray-500 font-semibold w-6 h-6 translate-y-[1px]'
                    : 'w-5 h-5'
                )}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
