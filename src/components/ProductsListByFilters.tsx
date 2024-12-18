import { IProduct, TCategory } from '../types';
import ProductCard from './ProductCard';
import { Button } from './uikit/Button';
import ProductsListSkeleton from './uikit/ProductsListSkeleton';

interface IProps {
  products?: IProduct[];
  currentCategory: TCategory | null;
  increaseLimitProducts: () => void;
  isLoading: boolean;
  limit: number;
}

export default function ProductsListByFilters({
  products,
  currentCategory,
  increaseLimitProducts,
  isLoading,
  limit,
}: IProps) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <h3 className="text-xl font-semibold mb-12 first-letter:uppercase">
          {currentCategory === null ? 'All' : currentCategory}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20 max-lg:grid-cols-2">
        {!isLoading && (
          <>
            {products &&
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </>
        )}
        {isLoading && (
          <>
            <ProductsListSkeleton limit={limit} />
          </>
        )}
      </div>
      <Button
        type="outline"
        rounded={true}
        onClick={increaseLimitProducts}
        className="max-w-max mx-auto"
      >
        Show more
      </Button>
    </div>
  );
}
