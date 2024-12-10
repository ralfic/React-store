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
      <ul className="flex gap-10 font-medium text-sm">
        {pages.map((page, index) => (
          <Link key={index} to={page.path}>
            <li
              className={clsx(
                them === 'dark'
                  ? pathname === page.path
                    ? 'text-black'
                    : 'text-gray-400'
                  : 'text-white', 
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
