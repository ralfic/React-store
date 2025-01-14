import useProduct from '@/hooks/useProduct';
import { IProduct } from '@/types';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

export default function ButtonWishlist({ product }: { product: IProduct }) {
  const { addToWishList, thereIsInWishlist } = useProduct(product);

  return (
    <span
      className=" bg-gray-200/80 rounded-full p-[6px] absolute top-4 right-4 invisible hover-elements dark:bg-black"
      onClick={addToWishList}
    >
      {thereIsInWishlist ? (
        <PiHeartFill className="fill-red-500" />
      ) : (
        <PiHeartLight />
      )}
    </span>
  );
}
