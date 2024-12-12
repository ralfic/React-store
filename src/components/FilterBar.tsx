import clsx from 'clsx';
import { useGetCategoriesQuery } from '../api/categoriesApi';
import { TCategory } from '../types';
import { BsFilter } from 'react-icons/bs';

interface IProps {
  selectCategory: TCategory | null;
  setSelectCategory: (category: TCategory | null) => void;
}

export default function FilterBar({
  selectCategory,
  setSelectCategory,
}: IProps) {
  const { data } = useGetCategoriesQuery(null);

  return (
    <div className="flex flex-col gap-8 font-semibold max-w-[256px] w-full">
      <div className="flex gap-1 items-center ">
        <BsFilter className="w-6 h-6" />
        <h3 className=" text-xl ">Filter</h3>
      </div>
      <div>
        <h4 className=" mb-4">CATEGORIES</h4>
        <ul className="flex gap-3 flex-col">
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
          {data &&
            data.categories.map((category, i) => (
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
        </ul>
      </div>
      <div>
        <h4 className=" mb-4">PRICE</h4>
        <ul className="flex flex-col gap-3 text-gray-400">
          <li>All</li>
          <li>Expensive</li>
          <li>Cheap</li>
        </ul>
      </div>
    </div>
  );
}
