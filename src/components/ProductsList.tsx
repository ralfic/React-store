import clsx from 'clsx';
import ProductCard from './ProductCard';
import { IProduct } from '@/types';

import ProductsListSkeleton from './uikit/ProductsListSkeleton';

interface IProps {
  typeProducts?: 'new' | 'hot';
  typeArrangement: 'col' | 'row';
  title: string;
  isLoading: boolean;
  products: IProduct[] | undefined;
}

export function ProductsList({
  typeProducts,
  typeArrangement,
  title,
  isLoading,
  products,
}: IProps) {
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
        {!isLoading && (
          <>
            {products &&
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  type={typeProducts}
                />
              ))}
          </>
        )}
        {isLoading && (
          <>
            <ProductsListSkeleton />
          </>
        )}
      </div>
    </div>
  );
}
