import { useAppSelector } from '@/store';
import WishlistItem from './WishlistItem';

export default function AccountWishlist() {
  const wishListItems = useAppSelector((state) => state.wishlist.items);

  return (
    <>
      <h2 className="text-xl font-semibold mb-10">Your Wishlist</h2>
      <div className="grid grid-cols-3 gap-4 overflow-y-scroll max-h-[600px] scroll pr-2 max-[1100px]:grid-cols-2 max-[860px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {wishListItems.map((item) => (
          <WishlistItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
