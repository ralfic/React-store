import { TCategory } from '@/types';
import clsx from 'clsx';
import FilterSkeleton from './FilterSkeleton';

interface IProps {
  selectCategory: TCategory | null;
  setSelectCategory: (category: TCategory | null) => void;
  categories: TCategory[] | undefined;
  isLoading: boolean;
}

export default function FilterCategories({
  selectCategory,
  setSelectCategory,
  categories,
  isLoading,
}: IProps) {
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
