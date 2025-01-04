import { IProduct } from '@/types';
import { Button } from '../uikit/Button';
import { RxCross2 } from 'react-icons/rx';
import useProduct from '@/hooks/useProduct';

interface IProps {
  item: IProduct;
}

export default function WishlistItem({ item }: IProps) {
  const { addToCart, thereIsInCar, removeFromWishList, navigateToProduct } =
    useProduct(item);

  return (
    <div className="flex flex-col py-2 px-2 rounded-md gap-2 border border-black w-full relative shadow-md bg-white ">
      <RxCross2
        className="w-6 h-6 cursor-pointer  text-gray-600 absolute right-3 "
        onClick={removeFromWishList}
      />
      <img
        src={item.image}
        className=" object-contain cursor-pointer mx-auto h-full"
        onClick={navigateToProduct}
      />
      <div className="flex flex-col gap-1 mt-0 ">
        <h5 className="font-semibold line-clamp-2 dark:text-black">
          {item.title}
        </h5>
        <Button className="" onClick={addToCart}>
          {thereIsInCar ? 'Go to cart' : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
}
