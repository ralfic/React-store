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

  return (
    <div className="flex flex-col gap-3 max-h-[450px] items-center ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  ">
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setMouseOnCard((prev) => !prev)}
          onMouseLeave={() => setMouseOnCard((prev) => !prev)}
        >
          {type && (
            <span className="bg-gray-200/80 text-black absolute top-4 left-4 rounded-sm px-2.5 uppercase font-bold text-sm ">
              {type}
            </span>
          )}
          <span
            className={clsx(
              ' bg-gray-200/80 rounded-full p-[6px] absolute top-4 right-4',
              mouseOnCard ? 'invisible' : ''
            )}
          >
            <PiHeartLight />
          </span>
          <img
            className=" max-w-[265px] h-[300px]  object-fill w-full "
            src={product.image}
            alt={product.title}
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
        <div className="font-semibold">${product.price}</div>
      </div>
    </div>
  );
}
