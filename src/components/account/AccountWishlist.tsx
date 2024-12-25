import { useAppSelector } from '@/store';
import AccountWishlistItem from './AccountWishlistItem';

export default function AccountWishlist() {
  const wishListItems = useAppSelector((state) => state.wishlist.items);
  return (
    <div className="px-[72px] w-full">
      <h2 className="text-xl font-semibold mb-10">Your Wishlist</h2>

      <div className="flex justify-between text-gray-400 border-b py-1 px-9 ">
        <p>Product</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <div className="flex flex-col overflow-y-scroll max-h-[600px] scroll pr-1">
        {wishListItems.map((item) => (
          <AccountWishlistItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
