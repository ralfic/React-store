import { SkeletonText } from '@/components/ui/skeleton';

export default function FilterSkeleton({ count = 7 }) {
  return (
    <>
      <SkeletonText noOfLines={count} gap="3" height={'6'} />
    </>
  );
}
