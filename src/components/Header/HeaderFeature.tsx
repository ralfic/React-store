import { useAppDispatch, useAppSelector } from '@/store';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import { Box, Float, Circle } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { PiUserCircleLight, PiShoppingCartSimpleLight } from 'react-icons/pi';

export default function HeaderFeature() {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <div className="flex gap-2">
      <button>
        <CiSearch className="w-6 h-6" />
      </button>
      <button>
        <PiUserCircleLight className="w-6 h-6" />
      </button>
      <button
        className="flex gap-y-1 items-center justify-center"
        onClick={() => dispatch(toggleCart(true))}
      >
        <Box position="relative" w="24px" h="24px" bg="transparent">
          <PiShoppingCartSimpleLight className="w-6 h-6" />
          {totalQuantity !== 0 && (
            <Float>
              <Circle
                className="text-xs font-semibold font-Poppins"
                size="5"
                bg="black"
                color="white"
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
