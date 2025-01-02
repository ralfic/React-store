import { IOrderItem } from '@/types';
import { Box, Circle, Float } from '@chakra-ui/react';

interface IProps {
  item: IOrderItem;
}

export default function OrderItem({ item }: IProps) {
  return (
    <li>
      <Box position="relative" w="96px" h="96px" bg="transparent">
        <img className="shadow-md" src={item.image} alt="" />
        <Float>
          <Circle
            className="font-semibold font-Inter bg-black dark:bg-white text-white dark:text-black  dark:border dark:border-black"
            size="7"
          >
            {item.quantity}
          </Circle>
        </Float>
      </Box>
    </li>
  );
}
