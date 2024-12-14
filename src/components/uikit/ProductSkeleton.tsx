import { Stack } from '@chakra-ui/react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton() {
  return (
    <div className="flex gap-14 justify-start">
      <Skeleton height="550px" width={'548px'} />
      <Stack className="self-start flex h-full" gap={'5'} width="505px">
        <Skeleton height={'16'} width={'full'} />
        <Skeleton height={'36'} width={'full'} />
        <Skeleton height={'8'} width={'full'} />
      </Stack>
    </div>
  );
}
