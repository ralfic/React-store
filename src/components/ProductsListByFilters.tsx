import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from './uikit/Button';
import ProductsListSkeleton from './uikit/ProductsListSkeleton';
import { useAppDispatch, useAppSelector } from '@/store';
import { setFilters } from '@/store/slices/products/productsSlice';
import { Input } from '@chakra-ui/react';
import { InputGroup } from '@/components/ui/input-group';
import { CiSearch } from 'react-icons/ci';

interface IProps {
  isLoading: boolean;
}

export default function ProductsListByFilters({ isLoading }: IProps) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const { category, limit } = useAppSelector((state) => state.products.filters);
  const [searchValue, setSearchValue] = useState('');

  function increaseLimit() {
    dispatch(setFilters({ key: 'limit', value: limit + 9 }));
  }

  return (
    <div className="w-full">
      <div className="flex  justify-between h-20 items-center gap-4">
        <h3 className="text-xl font-semibold mb-12 first-letter:uppercase ">
          {category === null ? 'All' : category}
        </h3>
        <InputGroup
          className="justify-self-end max-w-[280px] mb-12"
          flex="1"
          height={20}
          startElement={<CiSearch className="w-5 h-5" />}
        >
          <Input
            className="border rounded-md"
            placeholder="Search the product"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-2 max-m:grid-cols-1">
        {!isLoading && (
          <>
            {products &&
              products
                .filter((product) => product.title.includes(searchValue))
                .map((product, index) => (
                  <ProductCard key={index} product={product} order={'col'} />
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
        onClick={increaseLimit}
        className="max-w-max mx-auto"
      >
        Show more
      </Button>
    </div>
  );
}
