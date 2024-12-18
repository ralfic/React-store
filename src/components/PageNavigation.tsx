import { getRndInteger } from '@/helpers/getRndInteger';
import clsx from 'clsx';
import { Link, useLocation, useParams } from 'react-router-dom';

interface IProps {
  them?: 'dark' | 'light';
}

export default function PageNavigation({ them = 'dark' }: IProps) {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex gap-10 font-medium select-none text-sm">
        <NavPageLink path="/" name="home" them={them} currentPath={pathname} />
        <NavPageLink
          path="/shope"
          name="shope"
          them={them}
          currentPath={pathname}
        />
        <NavPageLink
          path={`/product/${id ? id : getRndInteger(1, 151)}`}
          name="product"
          them={them}
          currentPath={pathname}
        />
      </ul>
    </nav>
  );
}

interface INavPageLinkProps {
  path: string;
  name: string;
  currentPath: string;
  them?: 'dark' | 'light';
}

function NavPageLink({ path, name, currentPath, them }: INavPageLinkProps) {
  return (
    <Link
      to={path}
      className={clsx(
        'relative cursor-pointer transition-all ease-in-out before:duration-300  before:transition-[width] before:ease-in-out before:w-0  hover:before:w-full before:h-[1.5px]  before:bottom-0  before:absolute first-letter:uppercase',
        them === 'dark'
          ? path === currentPath
            ? 'text-black before:bg-black'
            : 'text-gray-400 before:bg-gray-400'
          : 'text-white'
      )}
    >
      {name}
    </Link>
  );
}
