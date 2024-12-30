import { TCategory } from '@/types';
import clsx from 'clsx';
import FilterSkeleton from '../uikit/FilterSkeleton';
import { setFilters } from '@/store/slices/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/store';

interface IProps {
  categories: TCategory[] | undefined;
  isLoading: boolean;
}

export default function FilterCategories({ categories, isLoading }: IProps) {
  const dispatch = useAppDispatch();
  const selectCategory = useAppSelector(
    (state) => state.products.filters.category
  );

  function setSelectCategory(category: TCategory | null) {
    dispatch(setFilters({ key: 'category', value: category }));
    dispatch(setFilters({ key: 'limit', value: 9 }));
  }

  return (
    <div>
      <h4 className=" mb-4">CATEGORIES</h4>
      <ul className="flex gap-3 flex-col">
        {!isLoading && (
          <>
            <li
              className={clsx(
                'first-letter:uppercase relative  before:w-0 self-start cursor-pointer ',
                selectCategory === null
                  ? 'text-black transition-all before:w-full ease-in-out before:duration-400 before:bg-black before:h-[1.5px] before:bottom-0  before:absolute before:transition-[width]'
                  : 'text-gray-400'
              )}
              onClick={() => setSelectCategory(null)}
            >
              all
            </li>
            {categories &&
              categories.map((category, i) => (
                <li
                  className={clsx(
                    'first-letter:uppercase relative  before:w-0 self-start cursor-pointer ',
                    selectCategory === category
                      ? 'text-black transition-all before:w-full ease-in-out before:duration-300 before:bg-black before:h-[1.5px] before:bottom-0  before:absolute before:transition-[width]'
                      : 'text-gray-400'
                  )}
                  key={i}
                  onClick={() => setSelectCategory(category as TCategory)}
                >
                  {category}
                </li>
              ))}
          </>
        )}
        {isLoading && <FilterSkeleton />}
      </ul>
    </div>
  );
}
