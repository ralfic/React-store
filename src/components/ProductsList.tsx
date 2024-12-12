import clsx from 'clsx';
import { useGetProductsQuery } from '../api/productApi';
import ProductCard from './ProductCard';

interface IProps {
  typeProducts?: 'new' | 'hot';
  typeArrangement: 'col' | 'row';
  title: string;
}

export function ProductsList({ typeProducts, typeArrangement, title }: IProps) {
  const { data } = useGetProductsQuery({});

  return (
    <div className="max-w-wrapper mx-auto w-full py-12">
      <h2 className="font-semibold text-4xl mb-12 font-Poppins">{title}</h2>
      <div
        className={clsx(
          typeArrangement === 'row'
            ? 'flex flex-nowrap overflow-y-auto scrollbar-thin pb-12 scroll gap-6'
            : 'grid grid-cols-4 gap-x-6 gap-y-12'
        )}
      >
        {data &&
          data.products.map((product, index) => (
            <ProductCard key={index} product={product} type={typeProducts} />
          ))}
      </div>
    </div>
  );
}
