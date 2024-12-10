import { useGetProductsQuery } from '../api/productApi';
import ProductCard from './ProductCard';

export function ProductsList() {
  const { data, error, isLoading } = useGetProductsQuery(null);
  console.log(data);
  return (
    <div className="max-w-wrapper mx-auto w-full py-12">
      <h2 className="font-semibold text-4xl">New Arrivals</h2>
      <div className="flex flex-nowrap gap-6 overflow-y-auto scrollbar-thin max-md:overflow-y-hidden ">
        {data &&
          data?.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
