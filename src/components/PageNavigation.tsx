import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  them?: 'dark' | 'light';
}

const pages = [
  { namePage: 'Home', path: '/' },
  { namePage: 'Shope', path: '/shope' },
  { namePage: 'Product', path: '/product' },
];

export default function PageNavigation({ them = 'dark' }: IProps) {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className="flex gap-10 font-medium text">
        {pages.map((page, index) => (
          <Link key={index} to={page.path}>
            <li
              className={clsx(
                'relative cursor-pointer transition-all ease-in-out before:duration-300  before:transition-[width] before:ease-in-out before:w-0  hover:before:w-full before:h-[1.5px]  before:bottom-0  before:absolute ',
                them === 'dark'
                  ? pathname === page.path
                    ? 'text-black before:bg-black'
                    : 'text-gray-400 before:bg-gray-400'
                  : 'text-white'
              )}
            >
              {page.namePage}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
