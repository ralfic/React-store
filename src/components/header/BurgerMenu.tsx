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
import { getRndInteger } from '@/helpers/getRndInteger';
import { useAppSelector } from '@/store';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import { Box, Float, Circle } from '@chakra-ui/react';
import {
  PiHeartLight,
  PiInstagramLogoLight,
  PiShoppingCartSimpleLight,
  PiYoutubeLogoLight,
} from 'react-icons/pi';
import { Button } from '../uikit/Button';
import { LiaFacebookF } from 'react-icons/lia';

export default function BurgerMenu() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <RxHamburgerMenu className="w-6 h-6 hidden max-sm:block cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-Poppins font-medium text-base">
            React store
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerActionTrigger className="w-full">
            <div className="flex flex-col text-lg font-medium text-start">
              <Link to="/" className="py-4 border-b">
                Home
              </Link>
              <Link to="/shope" className="py-4 border-b">
                Shop
              </Link>
              <Link
                to={`/product/${id ? id : getRndInteger(1, 151)}`}
                className="py-4 border-b"
              >
                Product
              </Link>
            </div>
          </DrawerActionTrigger>
        </DrawerBody>
        <DrawerFooter className="w-full">
          <DrawerActionTrigger className="w-full flex flex-col gap-5">
            <div className="flex flex-col w-full ">
              <button
                className="flex items-center justify-between w-full border-b py-2"
                onClick={() => dispatch(toggleCart(true))}
              >
                <p className="text-lg text-gray-500">Cart</p>
                <Box position="relative" w="24px" h="24px" bg="transparent">
                  <PiShoppingCartSimpleLight className="w-6 h-6" />
                  {totalQuantity !== 0 && (
                    <Float>
                      <Circle
                        className="text-xs font-semibold font-Poppins"
                        size="4.5"
                        bg="black"
                        color="white"
                      >
                        {totalQuantity}
                      </Circle>
                    </Float>
                  )}
                </Box>
              </button>
              <Link
                className="flex items-center justify-between w-full border-b py-2"
                to={isAuthenticated ? '/account/wishlist' : '/signin'}
              >
                <p className="text-lg text-gray-500">Wishlist</p>
                <Box position="relative" w="24px" h="24px" bg="transparent">
                  <PiHeartLight className="w-6 h-6" />
                  {totalQuantity !== 0 && (
                    <Float>
                      <Circle
                        className="text-xs font-semibold font-Poppins"
                        size="4.5"
                        bg="black"
                        color="white"
                      >
                        {totalQuantity}
                      </Circle>
                    </Float>
                  )}
                </Box>
              </Link>
            </div>
            <Link to={isAuthenticated ? '/account' : '/signin'}>
              <Button>{isAuthenticated ? 'Account' : 'Sign In'}</Button>
            </Link>
            <div className="flex gap-4 w-full">
              <PiInstagramLogoLight className="w-6 h-6 cursor-pointer" />
              <LiaFacebookF className="w-6 h-6 cursor-pointer" />
              <PiYoutubeLogoLight className="w-6 h-6 cursor-pointer" />
            </div>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
