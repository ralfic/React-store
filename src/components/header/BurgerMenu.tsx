import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useAppSelector } from '@/store';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../uikit/Button';
import SocialMediaList from '../uikit/socialMediaList';
import CartIcon from '../uikit/CartIcon';
import WishlistIcon from '../uikit/WishlistIcon';
import { roots } from '@/constants/constants';
import clsx from 'clsx';

export default function BurgerMenu() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <DrawerRoot >
      <DrawerBackdrop/>
      <DrawerTrigger asChild>
        <RxHamburgerMenu className="w-6 h-6 hidden max-sm:block cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-Poppins font-medium text-base dark:text-violet-500 text-center">
            React store
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerActionTrigger className="w-full">
            <div className="flex flex-col text-lg font-medium text-start">
              {roots.map((root, i) => (
                <Link
                  key={i}
                  to={root.path}
                  className={clsx(
                    'py-4 border-b',
                    root.path === pathname &&
                      'text-violet-400 border-violet-400'
                  )}
                >
                  {root.title}
                </Link>
              ))}
            </div>
          </DrawerActionTrigger>
        </DrawerBody>
        <DrawerFooter className="w-full">
          <DrawerActionTrigger className="w-full flex flex-col gap-5">
            <CartIcon type="burger" />
            <WishlistIcon />
            <Link to={isAuthenticated ? '/account' : '/signin'}>
              <Button>{isAuthenticated ? 'Account' : 'Sign In'}</Button>
            </Link>
            <div className="flex gap-4 w-full">
              <SocialMediaList />
            </div>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
