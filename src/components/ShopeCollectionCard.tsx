import { setFilters } from '@/store/slices/products/productsSlice';
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
        'flex p-12 box-border bg-gray-200/70 hover:scale-[1.02] transition-all ease-in-out ',
        type === 'sm' ? 'flex-row justify-between' : 'flex-col'
      )}
    >
      {type === 'lg' && (
        <div className="h-full w-full mb-4">
          <img
            className="object-contain  h-full w-full "
            src={img}
            alt={title}
          />
        </div>
      )}
      <div className="mt-auto">
        <h3 className="font-medium text-[34px] leading-[38px] font-Poppins mb-3 first-letter:uppercase">
          {title}
        </h3>
        <Link
          to={'/shope'}
          className="inline-flex items-center justify-center border-b cursor-pointer border-black s font-medium"
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
