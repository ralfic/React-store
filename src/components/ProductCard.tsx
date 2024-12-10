import { IProduct } from '../types';
import { Button } from './uikit/Button';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  return (
    <div className="flex flex-col gap-3 max-h-[450px] items-center ">
      <div className="max-w-[265px] h-[300px] ">
        <img
          className="h-full object-fill w-full shadow-lg rounded-lg"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col gap-1 mt-auto">
        <Button>Add to cart</Button>
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
