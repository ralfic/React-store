import { Stack } from '@chakra-ui/react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton() {
  return (
    <div className="flex gap-14 justify-between relative pb-10 max-[880px]:flex-col">
      <Skeleton
        className="max-w-[528px] w-full  max-lg:max-w-[408px] max-[880px]:max-w-full h-[550px]"
        height={550}
      />
      <Stack className="self-start flex h-full w-[505px] max-[880px]:w-full" gap={'5'}>
        <Skeleton height={'16'} width={'full'} />
        <Skeleton height={'36'} width={'full'} />
        <Skeleton height={'8'} width={'full'} />
      </Stack>
    </div>
  );
}
