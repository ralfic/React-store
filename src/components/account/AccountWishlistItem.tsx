import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/cart/cartSlice';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import { IProduct } from '@/types';
import { Button } from '../uikit/Button';
import calculateDiscount from '@/helpers/calculateDiscount';
import { RxCross2 } from 'react-icons/rx';
import { removeItemFromWishList } from '@/store/slices/wishlist/wishlistSlice';
import { useNavigate } from 'react-router-dom';

interface IProps {
  item: IProduct;
}

export default function AccountWishlistItem({ item }: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const itemsCart = useAppSelector((state) => state.cart.items);
  const thereIsInCar = !!itemsCart.find((i) => i.id === item.id);
  const discount = calculateDiscount(item.discount, item.price);

  return (
    <div className="flex justify-between items-center py-6 border-b">
      <div className="flex gap-2 items-center ">
        <RxCross2
          className="w-6 h-6 cursor-pointer  text-gray-600"
          onClick={() => dispatch(removeItemFromWishList(item))}
        />
        <img
          src={item.image}
          className="w-24 h-24 object-contain cursor-pointer"
          onClick={() => navigate(`/product/${item.id}`)}
        />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
            {item.title}
          </h5>
          <p className="text-sm text-gray-400">Model: {item.model}</p>
        </div>
      </div>
      <p className="flex gap-2">
        {item.discount && (
          <>
            <p>{item.price - discount}$</p>
            <p className="text-gray-400 line-through">{item.price}$</p>
          </>
        )}
      </p>
      <Button
        className="w-fit h-fit"
        onClick={() => {
          if (!thereIsInCar) {
            dispatch(addItem(item));
          } else {
            dispatch(toggleCart(true));
          }
        }}
      >
        {thereIsInCar ? 'Go to cart' : 'Add to cart'}
      </Button>
    </div>
  );
}
