import { useAppDispatch, useAppSelector } from '@/store';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
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
      {type === 'burger' && <p className="text-lg text-gray-500 dark:text-violet-500">Cart</p>}
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
  );
}
