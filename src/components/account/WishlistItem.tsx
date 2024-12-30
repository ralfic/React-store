import { IProduct } from '@/types';
import { Button } from '../uikit/Button';
import { RxCross2 } from 'react-icons/rx';
import useProduct from '@/hooks/useProduct';

interface IProps {
  item: IProduct;
}

export default function WishlistItem({ item }: IProps) {
  const {
    discount,
    addToCart,
    thereIsInCar,
    removeFromWishList,
    navigateToProduct,
  } = useProduct(item);

  return (
    <div className="flex flex-col   py-4 px-4 rounded-md gap-2 border border-black w-full relative shadow-md">
      <RxCross2
        className="w-6 h-6 cursor-pointer  text-gray-600 absolute right-3 "
        onClick={removeFromWishList}
      />
      <div className="flex gap-2  flex-col ">
        <img
          src={item.image}
          className="w-28 h-28 object-contain cursor-pointer mx-auto"
          onClick={navigateToProduct}
        />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
            {item.title}
          </h5>
          <p className="text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
            Model: {item.model}
          </p>
        </div>
      </div>
      <p className="flex gap-2 font-semibold">
        {item.discount ? (
          <>
            <p>{item.price - discount}$</p>
            <p className="text-gray-400 line-through">{item.price}$</p>
          </>
        ) : (
          <p>{item.price}$</p>
        )}
      </p>
      <Button className="mt-auto" onClick={addToCart}>
        {thereIsInCar ? 'Go to cart' : 'Add to cart'}
      </Button>
    </div>
  );
}
