import { IProduct } from '@/types';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import { Button } from '@/components/uikit/Button';
import { useState } from 'react';
import clsx from 'clsx';
import useProduct from '@/hooks/useProduct';

interface IProps {
  product: IProduct;
}

export default function Product({ product }: IProps) {
  const {
    discount,
    addToWishList,
    addToCart,
    thereIsInCar,
    thereIsInWishlist,
  } = useProduct(product);

  const [openTitle, setOpenTitle] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <section className="flex gap-14 justify-between relative pb-10 max-[880px]:flex-col">
      <div className="max-w-[528px] relative max-lg:max-w-[408px] max-[880px]:max-w-full bg-white">
        {product.discount && (
          <span className="bg-green-400 text-white py-0.5 absolute top-4 left-4  rounded-[4px] px-2.5 uppercase font-bold text-sm">
            {`-${product.discount}%`}
          </span>
        )}
        <img className="mt-10 " src={product.image} />
      </div>
      <div>
        <div className="flex flex-col gap-4 max-w-[535px] pb-6 border-b max-[880px]:max-w-full">
          <h1
            className={clsx(
              'font-Poppins font-medium text-3xl line-clamp-2 cursor-pointer ',
              openTitle && 'line-clamp-none'
            )}
            onClick={() => setOpenTitle((prev) => !prev)}
          >
            {product.title}
          </h1>
          <p
            className={clsx(
              'text-gray-400 whitespace-break-spaces line-clamp-6 cursor-pointer',
              openDescription && 'line-clamp-none'
            )}
            onClick={() => setOpenDescription((prev) => !prev)}
          >
            {product.description}.
          </p>
          <div className="font-medium flex gap-2 font-Poppins text-2xl ">
            {product.discount && (
              <>
                <p>{product.price - discount}$</p>
                <p className="text-gray-400 line-through">{product.price}$</p>
              </>
            )}
            {!product.discount && <>{product.price}$</>}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Category</h4>
            <p className="text-sm first-letter:uppercase">{product.category}</p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Brand</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.brand ? product.brand : '...'}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Color</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.color ? product.color : '...'}
            </p>
          </div>
          <div className="flex gap-2">
            <h4 className="text-gray-400 text-sm uppercase">Model</h4>
            <p className="text-sm first-letter:uppercase">
              {product?.model ? product.model : '...'}
            </p>
          </div>
        </div>
        <div className="py-6 flex flex-col gap-4">
          <div className="flex gap-4 max-lg:flex-col  max-[860px]:flex-row max-m:flex-col">
            <Button
              icon={
                thereIsInWishlist ? (
                  <PiHeartFill className="fill-red-500 h-6 w-6" />
                ) : (
                  <PiHeartLight className="h-6 w-6" />
                )
              }
              type="outline"
              onClick={addToWishList}
            >
              Wishlist
            </Button>
            <Button onClick={addToCart}>
              {thereIsInCar ? 'Go to cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
