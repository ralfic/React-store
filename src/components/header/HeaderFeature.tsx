import { useAppDispatch, useAppSelector } from '@/store';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import { Box, Float, Circle } from '@chakra-ui/react';
import { PiUserCircleLight, PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode } from 'react-icons/md';

export default function HeaderFeature() {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="flex gap-2 ml-auto">
      <button onClick={toggleTheme}>
        <MdOutlineLightMode className="w-6 h-6" />
      </button>
      <Link to={isAuthenticated ? '/account' : '/signin'}>
        <PiUserCircleLight className="w-6 h-6 " />
      </Link>
      <button
        className="flex gap-y-1 items-center justify-center"
        onClick={() => dispatch(toggleCart(true))}
      >
        <Box position="relative" w="24px" h="24px" bg="transparent">
          <PiShoppingCartSimpleLight className="w-6 h-6" />
          {totalQuantity !== 0 && (
            <Float>
              <Circle
                className="text-xs font-semibold font-Poppins bg-black dark:bg-white text-white dark:text-black"
                size="4.5"
              >
                {totalQuantity}
              </Circle>
            </Float>
          )}
        </Box>
      </button>
    </div>
  );
}
