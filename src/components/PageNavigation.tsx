import { roots } from '@/constants/constants';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  them?: 'dark' | 'light';
}
export default function PageNavigation({ them = 'dark' }: IProps) {
  return (
    <nav className={clsx('mx-auto', them === 'light' && 'mr-0 max-xs:mr-auto')}>
      <ul
        className={clsx(
          'flex gap-10 font-medium select-none text-sm ',
          them === 'light'
            ? 'max-2xs:flex-col max-2xs:items-center'
            : 'max-sm:hidden'
        )}
      >
        {roots.map((root, i) => (
          <NavPageLink key={i} path={root.path} name={root.title} them={them} />
        ))}
      </ul>
    </nav>
  );
}

interface INavPageLinkProps {
  path: string;
  name: string;

  them?: 'dark' | 'light';
}

function NavPageLink({ path, name, them }: INavPageLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={clsx(
        'relative cursor-pointer transition-all ease-in-out before:duration-300  before:transition-[width] before:ease-in-out before:w-0  hover:before:w-full before:h-[1.5px]  before:bottom-0  before:absolute first-letter:uppercase',
        them === 'dark'
          ? path === pathname
            ? 'text-black before:bg-black dark:text-violet-600 dark:before:bg-violet-600'
            : 'text-gray-400 before:bg-gray-400'
          : 'text-white '
      )}
    >
      {name}
    </Link>
  );
}
