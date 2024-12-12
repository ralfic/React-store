import { IProduct, TCategory } from '../types';
import ProductCard from './ProductCard';

interface IProps {
  products?: IProduct[];
  currentCategory: TCategory | null;
  increaseLimitProducts: () => void;
}

export default function ProductsListByFilters({
  products,
  currentCategory,
  increaseLimitProducts,
}: IProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-self-start">
        <h3 className="text-xl font-semibold mb-12 first-letter:uppercase">
          {currentCategory === null ? 'All' : currentCategory}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <button
        onClick={increaseLimitProducts}
        className="border border-black bg-transparent font-medium py-2 px-10 rounded-3xl mx-auto block"
      >
        Show more
      </button>
    </div>
  );
}
