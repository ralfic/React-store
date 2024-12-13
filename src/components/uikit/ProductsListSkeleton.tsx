import { HStack, Stack } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';

export default function ProductsListSkeleton({ limit = 8 }) {
  return (
    <>
      {[...Array(limit)].map((_, index) => (
        <Stack key={index}>
          <Skeleton height="350px" width={'266px'}  />
          <HStack width="full">
            <SkeletonText noOfLines={3} gap="3" height={'5'} />
          </HStack>
        </Stack>
      ))}
    </>
  );
}
