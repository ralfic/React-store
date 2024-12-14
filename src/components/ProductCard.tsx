import { useState } from 'react';
import { IProduct } from '../types';
import { Button } from './uikit/Button';
import clsx from 'clsx';
import { PiHeartLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import calculateDiscount from '@/helpers/calculateDiscount';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const [mouseOnCard, setMouseOnCard] = useState(true);

  return (
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
          {product.discount && (
            <span className="bg-green-400 text-white absolute top-4 left-4 rounded-[4px] px-2.5 uppercase font-bold text-sm">
              {`-${product.discount}%`}
            </span>
          )}
          <Link to={`/product/${product.id}`}>
            <img
              className=" max-w-[265px] h-[300px]  object-contain w-full "
              src={product.image}
            />
          </Link>
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
              <p>{calculateDiscount(product.discount, product.price)}$</p>
              <p className="text-gray-400 line-through">{product.price}$</p>
            </>
          )}
          {!product.discount && <>{product.price}$</>}
        </div>
      </div>
    </div>
  );
}
