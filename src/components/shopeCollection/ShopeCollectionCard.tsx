import { setFilters } from '@/store/slices/products/products.slice';
import clsx from 'clsx';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface ICollectionCardProps {
  title: string;
  img: string;
  type?: 'lg' | 'sm';
}

export function ShopCollectionCard({
  title,
  img,
  type = 'sm',
}: ICollectionCardProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={clsx(
        'flex p-12 box-border bg-gray-200/70 hover:scale-[1.02] transition-all ease-in-out dark:bg-neutral-600 dark:hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-violet-600',
        type === 'sm' ? 'flex-row justify-between' : 'flex-col'
      )}
    >
      {type === 'lg' && (
        <div className="h-full w-full mb-4">
          <img className="object-contain  h-full w-full " src={img} />
        </div>
      )}
      <div className="mt-auto">
        <h3 className="font-medium text-[34px] leading-[38px] font-Poppins mb-3 first-letter:uppercase dark:text-white">
          {title}
        </h3>
        <Link
          to={'/shope'}
          className="inline-flex items-center justify-center border-b cursor-pointer border-black  font-medium dark:text-violet-500 transition-colors dark:border-violet-500 dark:hover:text-white dark:hover:border-white"
          onClick={() =>
            dispatch(setFilters({ key: 'category', value: title }))
          }
        >
          Collection
          <HiOutlineArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      {type === 'sm' && (
        <div className="h-full w-full ml-4">
          <img
            className="object-contain  h-full w-full"
            src={img}
            alt={title}
          />
        </div>
      )}
    </div>
  );
}
