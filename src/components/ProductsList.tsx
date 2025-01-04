import clsx from 'clsx';
import { ProductCard } from './ProductCard';
import { IProduct } from '@/types';
import { HiOutlineArrowRight } from 'react-icons/hi';
import ProductsListSkeleton from './uikit/ProductsListSkeleton';
import { Link } from 'react-router-dom';

interface IProps {
  typeArrangement: 'col' | 'row';
  title: string;
  isLoading: boolean;
  products: IProduct[] | undefined;
}

export function ProductsList({
  typeArrangement,
  title,
  isLoading,
  products,
}: IProps) {
  return (
    <div className="max-w-wrapper mx-auto w-full py-12">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-4xl mb-12 font-Poppins">{title}</h2>
        <LinkMoreProduct position="top" />
      </div>
      <div
        className={clsx(
          typeArrangement === 'row'
            ? 'flex flex-nowrap overflow-y-auto scrollbar-thin pb-12 scroll gap-6 '
            : 'grid grid-cols-4 gap-6 max-[1100px]:grid-cols-3 max-[860px]:grid-cols-2 max-xs:grid-cols-1'
        )}
      >
        {!isLoading && (
          <>
            {products &&
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  order={typeArrangement === 'row' ? 'row' : 'col'}
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
      <LinkMoreProduct position="bottom" />
    </div>
  );
}

interface ILinkMoreProduct {
  position: 'top' | 'bottom';
}

function LinkMoreProduct({ position = 'top' }: ILinkMoreProduct) {
  return (
    <Link
      to={'/shope'}
      className={clsx(
        position === 'top'
          ? 'inline-flex max-sm:hidden'
          : 'hidden max-sm:inline-flex pt-10',
        'items-center justify-center border-b cursor-pointer border-black  font-medium dark:text-violet-500 transition-colors dark:border-violet-500 dark:hover:text-white dark:hover:border-white'
      )}
    >
      More Products
      <HiOutlineArrowRight className="ml-1 w-4 h-4" />
    </Link>
  );
}
