import { useAppSelector } from '@/store';
import AccountWishlistItem from './AccountWishlistItem';

export default function AccountWishlist() {
  const wishListItems = useAppSelector((state) => state.wishlist.items);
  return (
    <div className="px-[72px] w-full">
      <h2 className="text-xl font-semibold mb-10">Your Wishlist</h2>
      <div className="grid grid-cols-3 gap-6 overflow-y-scroll max-h-[600px] scroll pr-2">
        {wishListItems.map((item) => (
          <AccountWishlistItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
