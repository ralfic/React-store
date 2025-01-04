import { useAppSelector } from '@/store';
import { Link } from 'react-router-dom';
import { Box, Float, Circle } from '@chakra-ui/react';
import { PiHeartLight } from 'react-icons/pi';

export default function WishlistIcon() {
  const items = useAppSelector((state) => state.wishlist.items);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  
  return (
    <Link
      className="flex items-center justify-between w-full border-b py-2"
      to={isAuthenticated ? '/account/wishlist' : '/signin'}
    >
      <p className="text-lg text-gray-500 dark:text-violet-500">Wishlist</p>
      <Box position="relative" w="24px" h="24px" bg="transparent">
        <PiHeartLight className="w-6 h-6" />
        {items.length !== 0 && (
          <Float>
            <Circle
              className="text-xs font-semibold font-Poppins"
              size="4.5"
              bg="black"
              color="white"
            >
              {items.length}
            </Circle>
          </Float>
        )}
      </Box>
    </Link>
  );
}
