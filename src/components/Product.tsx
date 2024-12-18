import { IProduct } from '@/types';
import { PiHeartLight } from 'react-icons/pi';
import { Button } from '@/components/uikit/Button';
import calculateDiscount from '@/helpers/calculateDiscount';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/cart/cartSlice';
import { toggleCart } from '@/store/slices/flyoutCartSlice';

interface IProps {
  product: IProduct | undefined;
}

export default function Product({ product }: IProps) {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const thereIsInCar = !!items.find((i) => i.id === product?.id);

  return (
    <section className="flex gap-14 justify-between relative pb-10">
      <div className="max-w-[548px] content-center">
        {product?.discount && (
          <span className="bg-green-400 text-white py-1 absolute top-4 left-4  rounded-[4px] px-3 uppercase font-bold text-sm">
            {`-${product?.discount}%`}
          </span>
        )}
        <img src={product?.image} />
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
                <p>
                  {product?.price -
                    calculateDiscount(product?.discount, product?.price)}
                  $
                </p>
                <p className="text-gray-400 line-through">{product.price}$</p>
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
          <div className="flex gap-4">
            <Button icon={<PiHeartLight className="w-6 h-6" />} type="outline">
              Wishlist
            </Button>
            <Button
              onClick={() => {
                if (!thereIsInCar) {
                  dispatch(addItem(product!));
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
    </section>
  );
}
