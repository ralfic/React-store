import { useAppDispatch, useAppSelector } from '@/store';
import { toggleCart } from '@/store/slices/flyoutCart.slice';
import { Box, Float, Circle } from '@chakra-ui/react';
import clsx from 'clsx';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';

interface CartIconProps {
  type?: 'burger' | 'header';
}

export default function CartIcon({ type = 'header' }: CartIconProps) {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <button
      className={clsx(
        'flex items-center justify-between w-full',
        type === 'burger' && 'border-b py-2'
      )}
      onClick={() => dispatch(toggleCart(true))}
    >
      {type === 'burger' && (
        <p className="text-lg text-gray-500 dark:text-violet-500">Cart</p>
      )}
      <Box position="relative" w="24px" h="24px" bg="transparent">
        <PiShoppingCartSimpleLight className="dark:hover:fill-violet-500 w-6 h-6" />
        {totalQuantity !== 0 && (
          <Float>
            <Circle className="text-xs font-semibold font-Poppins text-white bg-black dark:text-black  dark:bg-violet-300" size="4.5">
              {totalQuantity}
            </Circle>
          </Float>
        )}
      </Box>
    </button>
  );
}
