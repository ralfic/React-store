import { TCategory } from '../../types';
import { BsFilter } from 'react-icons/bs';
import FilterCategories from './FilterCategories';
import FilterPrice from './FilterPrice';
import { useGetCategoriesQuery } from '@/api/categoriesApi';

interface IProps {
  selectCategory: TCategory | null;
  setSelectCategory: (category: TCategory | null) => void;
  setSelectSort: (value: string | null) => void;
}

export default function FilterBar({
  selectCategory,
  setSelectCategory,
  setSelectSort,
}: IProps) {
  const { data, isLoading } = useGetCategoriesQuery(null);

  return (
    <div className="flex flex-col gap-8 font-semibold max-w-[256px] w-full">
      <div className="flex gap-1 items-center ">
        <BsFilter className="w-6 h-6" />
        <h3 className=" text-xl ">Filter</h3>
      </div>
      <FilterCategories
        categories={data?.categories}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        isLoading={isLoading}
      />
      <FilterPrice isLoading={isLoading} setSelectSort={setSelectSort} />
    </div>
  );
}
