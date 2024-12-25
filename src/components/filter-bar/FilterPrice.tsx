import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import FilterSkeleton from '../uikit/FilterSkeleton';
import { useAppSelector } from '@/store';

const valuePrice = [
  { title: 'all', sortValue: null },
  { title: 'expensive', sortValue: 'desc' },
  { title: 'cheap', sortValue: 'asc' },
];

interface IProps {
  setSelectSort: (value: string | null) => void;
  isLoading: boolean;
}

export default function FilterPrice({ isLoading, setSelectSort }: IProps) {
  const [selectCheckBox, setSelectCheckBox] = useState('all');
  const currentCategory = useAppSelector(
    (state) => state.products.filters.category
  );

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
                  checked={selectCheckBox === price.title}
                  onCheckedChange={() => {
                    setSelectCheckBox(price.title);
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
