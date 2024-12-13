import { useState } from 'react';
import { IProduct } from '../types';
import { Button } from './uikit/Button';
import clsx from 'clsx';
import { PiHeartLight } from 'react-icons/pi';

interface IProps {
  product: IProduct;
  type?: 'new' | 'hot';
}

export default function ProductCard({ product, type }: IProps) {
  const [mouseOnCard, setMouseOnCard] = useState(true);

  let productPriceWithDiscount = 0;

  if (product.discount) {
    productPriceWithDiscount = Math.round(
      (product.price * (100 - product.discount)) / 100
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3 max-h-[450px] items-center w-full">
        <div className="bg-white shadow-lg rounded-lg w-full ">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setMouseOnCard((prev) => !prev)}
            onMouseLeave={() => setMouseOnCard((prev) => !prev)}
          >
            <span
              className={clsx(
                ' bg-gray-200/80 rounded-full p-[6px] absolute top-4 right-4',
                mouseOnCard ? 'invisible' : ''
              )}
            >
              <PiHeartLight />
            </span>
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              {type && (
                <span className="bg-gray-200/80 text-black  rounded-[4px] px-2.5 uppercase font-bold text-sm ">
                  {type}
                </span>
              )}
              {product.discount && (
                <span className="bg-green-400 text-white  rounded-[4px] px-2.5 uppercase font-bold text-sm">
                  {`-${product.discount}%`}
                </span>
              )}
            </div>
            <img
              className=" max-w-[265px] h-[300px]  object-contain w-full "
              src={product.image}
            />
            <div className={clsx('pb-3 px-3', mouseOnCard ? 'invisible' : '')}>
              <Button size="sm">Add to cart</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-auto">
          <span className="bg-gray-200/80 text-black   rounded-2xl px-2 py-1 font-semibold text-sm self-start">
            {product.category}
          </span>
          <h4 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[265px] ">
            {product.title}
          </h4>
          <div className="font-semibold flex gap-2">
            {product.discount && (
              <>
                <p>{productPriceWithDiscount}$</p>
                <p className="text-gray-400 line-through">{product.price}$</p>
              </>
            )}
            {!product.discount && <>{product.price}$</>}
          </div>
        </div>
      </div>
    </>
  );
}
