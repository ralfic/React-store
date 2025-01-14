import { useAppDispatch } from '@/store';
import { clearAuth } from '@/store/slices/auth/auth.slice';
import { Avatar } from '@/components/ui/avatar';
import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';
import { useGetUserQuery } from '@/api/user/userApi';

const accountRoutes = [
  { path: '/account', title: 'Account' },
  { path: '/account/orders', title: 'Orders' },
  { path: '/account/wishlist', title: 'Wishlist' },
];

export default function AccountSidebar() {
  const { data: user } = useGetUserQuery();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  return (
    <aside className="bg-gray-100 px-4 py-10 gap-3 font-semibold max-w-[270px] max-md:max-w-[230px] max-sm:max-w-full mb-10 w-full rounded-lg h-fit dark:bg-neutral-600">
      <div className="mb-10 mx-auto max-w-[140px] flex flex-col items-center gap-2">
        <Avatar size="2xl" name={user?.name} colorPalette="gray" />
        <p className="text-xl text-nowrap ">{user?.name}</p>
      </div>
      <div className="flex flex-col">
        {accountRoutes.map((link, i) => (
          <Link
            className={clsx(
              'py-2',
              pathname === link.path
                ? 'border-b border-black dark:border-violet-500 dark:text-violet-500 '
                : 'text-gray-400 dark:text-neutral-200'
            )}
            to={link.path}
            key={i}
          >
            {link.title}
          </Link>
        ))}
        <Link
          className="py-2  text-gray-400 dark:text-neutral-200"
          to={'/'}
          onClick={() => {
            dispatch(clearAuth());
          }}
        >
          Log Out
        </Link>
      </div>
    </aside>
  );
}
