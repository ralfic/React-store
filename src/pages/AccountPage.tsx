import { Link, Outlet, useLocation } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import { useAppDispatch, useAppSelector } from '@/store';
import clsx from 'clsx';
import { clearAuth } from '@/store/slices/auth/authSlice';
import { clearUser } from '@/store/slices/user/userSlice';

const accountRoutes = [
  { path: '/account', title: 'Account' },
  { path: '/account/orders', title: 'Orders' },
  { path: '/account/wishlist', title: 'Wishlist' },
];

export default function AccountPage() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  
  return (
    <div className="pb-20 max-w-wrapper mx-auto">
      <h1 className="font-Poppins text-5xl font-medium text-center p-20">
        My Account
      </h1>
      <div className="flex gap-2">
        <aside className="bg-gray-100 px-4 py-10 gap-3 font-semibold max-w-[270px] w-full rounded-lg h-fit">
          <div className="mb-10 mx-auto max-w-[140px] flex flex-col items-center gap-2">
            <Avatar size="2xl" name={user.name} colorPalette="purple" />
            <p className="text-xl text-nowrap">{user.name}</p>
          </div>
          <div className="flex flex-col">
            {accountRoutes.map((link, i) => (
              <Link
                className={clsx(
                  'py-2',
                  pathname === link.path
                    ? 'border-b border-black'
                    : 'text-gray-400'
                )}
                to={link.path}
                key={i}
              >
                {link.title}
              </Link>
            ))}
            <Link
              className="py-2  text-gray-400"
              to={'/'}
              onClick={() => {
                dispatch(clearAuth());
                dispatch(clearUser());
              }}
            >
              Log Out
            </Link>
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}
