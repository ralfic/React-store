import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import FilterSkeleton from '../uikit/FilterSkeleton';
import { useAppDispatch, useAppSelector } from '@/store';
import { setFilters } from '@/store/slices/products/productsSlice';

const valuePrice = [
  { title: 'all', sortValue: null },
  { title: 'expensive', sortValue: 'desc' },
  { title: 'cheap', sortValue: 'asc' },
];

interface IProps {
  isLoading: boolean;
}

export default function FilterPrice({ isLoading }: IProps) {
  const dispatch = useAppDispatch();
  const [selectPriceSort, setSelectPriceSort] = useState('all');
  const currentCategory = useAppSelector(
    (state) => state.products.filters.category
  );

  function setSelectSort(value: string | null) {
    dispatch(setFilters({ key: 'sort', value: value }));
  }

  return (
    <div>
      <h4 className=" mb-4">PRICE</h4>
      <ul className="flex flex-col gap-3 text-gray-400">
        {!isLoading && (
          <>
            {valuePrice.map((price, i) => (
              <li className="flex justify-between " key={i}>
                <p className="first-letter:uppercase">{price.title}</p>
                <Checkbox
                  defaultChecked
                  checked={selectPriceSort === price.title}
                  onCheckedChange={() => {
                    setSelectPriceSort(price.title);
                    setSelectSort(price.sortValue);
                  }}
                  colorPalette="white"
                  variant="subtle"
                  size="lg"
                  disabled={currentCategory === null}
                />
              </li>
            ))}
          </>
        )}
        {isLoading && <FilterSkeleton count={valuePrice.length} />}
      </ul>
    </div>
  );
}
