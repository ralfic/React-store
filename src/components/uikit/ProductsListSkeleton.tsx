import { HStack, Stack } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';

export default function ProductsListSkeleton({ limit = 8 }) {
  return (
    <>
      {[...Array(limit)].map((_, index) => (
        <Stack key={index}>
          <Skeleton className="h-[290px] max-[1100px]:h-[310px] max-m:h-[230px] max-sm:h-[270px] max-xs:h-[310px] object-contain w-full mx-auto px-2 min-w-[261px] max-xs:min-w-[261px] max-sm:min-w-[200px]" />
          <HStack width="full">
            <SkeletonText noOfLines={3} gap="3" height={'5'} />
          </HStack>
        </Stack>
      ))}
    </>
  );
}
