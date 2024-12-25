import { useState } from 'react';
import { Rating } from '@/components/ui/rating';
import { IProduct } from '../types';
import { Button } from './uikit/Button';
import clsx from 'clsx';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import calculateDiscount from '@/helpers/calculateDiscount';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/cart/cartSlice';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import {
  addItemToWishList,
  removeItemFromWishList,
} from '@/store/slices/wishlist/wishlistSlice';
import { getRndInteger } from '@/helpers/getRndInteger';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const itemsWishlist = useAppSelector((state) => state.wishlist.items);
  const itemsCart = useAppSelector((state) => state.cart.items);
  const discount = calculateDiscount(product.discount, product.price);

  const thereIsInCar = !!itemsCart.find((i) => i.id === product.id);
  const thereIsInWishlist = !!itemsWishlist.find((i) => i.id === product.id);

  return (
    <div className="flex flex-col gap-3 max-h-[450px] items-center w-full font-Inter">
      <div className="bg-white shadow-lg rounded-lg w-full ">
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setMouseOnCard(true)}
          onMouseLeave={() => setMouseOnCard(false)}
        >
          <span
            className={clsx(
              ' bg-gray-200/80 rounded-full p-[6px] absolute top-4 right-4',
              !mouseOnCard ? 'invisible' : ''
            )}
            onClick={() => {
              if (thereIsInWishlist) {
                dispatch(removeItemFromWishList(product));
              } else {
                dispatch(addItemToWishList(product));
              }
            }}
          >
            {thereIsInWishlist ? (
              <PiHeartFill className="fill-red-500" />
            ) : (
              <PiHeartLight />
            )}
          </span>
          {product.discount && (
            <span className="bg-green-400 text-white absolute top-4 left-4 rounded-[4px] px-2.5 uppercase font-bold text-sm">
              {`-${product.discount}%`}
            </span>
          )}

          <img
            className=" max-w-[265px] h-[300px]  object-contain w-full mx-auto"
            src={product.image}
            onClick={() => navigate(`/product/${product.id}`)}
          />

          <div className={clsx('pb-3 px-3', !mouseOnCard ? 'invisible' : '')}>
            <Button
              onClick={() => {
                if (!thereIsInCar) {
                  dispatch(addItem(product));
                } else {
                  dispatch(toggleCart(true));
                }
              }}
            >
              {thereIsInCar ? 'Go to cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-auto">
        <Rating defaultValue={getRndInteger(2, 5)} size="sm" readOnly />
        <h4 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[265px] ">
          {product.title}
        </h4>
        <div className="font-semibold flex gap-2">
          {product.discount && (
            <>
              <p>{product.price - discount}$</p>
              <p className="text-gray-400 line-through">{product.price}$</p>
            </>
          )}
          {!product.discount && <>{product.price}$</>}
        </div>
      </div>
    </div>
  );
}
