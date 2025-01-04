import { memo } from 'react';
import { IProduct } from '../types';
import { Button } from './uikit/Button';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import useProduct from '@/hooks/useProduct';
import clsx from 'clsx';

interface IProps {
  product: IProduct;
  order: 'row' | 'col';
}

export const ProductCard = memo(function ProductCard({
  product,
  order,
}: IProps) {
  const {
    discount,
    addToWishList,
    addToCart,
    thereIsInCar,
    thereIsInWishlist,
    navigateToProduct,
  } = useProduct(product);

  return (
    <div
      className={clsx(
        'flex flex-col gap-3 max-h-[460px] max-lg:max-h-[420px] max-md:max-h-[420px] items-center w-full font-Inter',
        order === 'row' &&
          'min-w-[261px] max-xs:min-w-[261px] max-sm:min-w-[200px]'
      )}
    >
      <div className="bg-white shadow-lg rounded-lg w-full ">
        <div className="relative cursor-pointer">
          <span
            className=" bg-gray-200/80 rounded-full p-[6px] absolute top-4 right-4 invisible hover-elements dark:bg-violet-600"
            onClick={addToWishList}
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
            className="h-[260px]  max-[1100px]:h-[280px] max-m:h-[200px] max-sm:h-[240px] max-xs:h-[280px] object-contain w-full mx-auto px-2"
            src={product.image}
            onClick={navigateToProduct}
          />
          <div className="pb-3 px-3 invisible hover-elements">
            <Button onClick={addToCart}>
              {thereIsInCar ? 'Go to cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-start gap-1 mt-auto">
        <h4
          className="font-semibold text-wrap line-clamp-2 cursor-pointer"
          onClick={navigateToProduct}
        >
          {product.title}
        </h4>
        <div className="font-semibold flex gap-2">
          {product.discount && (
            <>
              <p className="dark:text-neutral-200">
                {product.price - discount}$
              </p>
              <p className="text-gray-400 line-through">{product.price}$</p>
            </>
          )}
          {!product.discount && <>{product.price}$</>}
        </div>
      </div>
    </div>
  );
});
