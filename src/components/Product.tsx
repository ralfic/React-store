import { IProduct } from '@/types';
import { PiHeartLight, PiMinus, PiPlus } from 'react-icons/pi';
import { Button } from '@/components/uikit/Button';
import { useState } from 'react';
import calculateDiscount from '@/helpers/calculateDiscount';

interface IProps {
  product: IProduct | undefined;
}

export default function Product({ product }: IProps) {
  const [countProduct, setCountProduct] = useState(1);

  function plusCountProduct() {
    setCountProduct((prev) => ++prev);
  }

  function minusCountProduct() {
    setCountProduct((prev) => (prev === 1 ? prev : prev - 1));
  }

  return (
    <section className="flex gap-14 justify-between relative pb-10">
      <div className="max-w-[548px]">
        <div className="absolute top-4 left-4 flex flex-col gap-1">
          {product?.discount && (
            <span className="bg-green-400 text-white py-1  rounded-[4px] px-3 uppercase font-bold text-sm">
              {`-${product?.discount}%`}
            </span>
          )}
        </div>
        <img src={product?.image} alt="" />
      </div>
      <div>
        <div className="flex flex-col gap-4 max-w-[505px] pb-6 border-b">
          <h1 className="font-Poppins font-medium text-3xl line-clamp-2">
            {product?.title}
          </h1>
          <p className="text-gray-400 whitespace-break-spaces line-clamp-6">
            {product?.description}.
          </p>
          <div className="font-medium flex gap-2 font-Poppins text-2xl ">
            {product?.discount && (
              <>
                <p>{calculateDiscount(product?.discount, product?.price)}$</p>
                <p className="text-gray-400 line-through">{product?.price}$</p>
              </>
            )}
            {!product?.discount && <>{product?.price}$</>}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Category</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.category}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Brand</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.brand ? product?.brand : '...'}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Color</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.color ? product?.color : '...'}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Model</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.model ? product?.model : '...'}
            </p>
          </div>
        </div>
        <div className="py-6 flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="bg-gray-100 py-2 px-4 grid grid-cols-[repeat(3,_minmax(0,_22px))] rounded-lg gap-4">
              <button onClick={minusCountProduct}>
                <PiMinus className="h-4 w-4" />
              </button>
              <div className="font-semibold text-center">{countProduct}</div>
              <button onClick={plusCountProduct}>
                <PiPlus className="h-4 w-4" />
              </button>
            </div>
            <Button
              icon={<PiHeartLight className="w-6 h-6" />}
              current="light"
              size="sm"
            >
              Wishlist
            </Button>
          </div>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
}
