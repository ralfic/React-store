import { useAppSelector } from '@/store';
import CartItem from './CartItem';

export default function OrderSummary() {
  const { items, totalPrice, totalDiscount, price, shippingType } =
    useAppSelector((state) => state.cart);

  return (
    <div className="border border-black rounded-md py-4 px-6 flex flex-col max-w-[420px] h-fit  w-full gap-4 max-lg:max-w-full dark:border-white dark:bg-neutral-600">
      <h2 className="font-Poppins text-2xl font-medium ">Order summary</h2>
      <div className="max-h-[440px] scroll pr-2 overflow-y-scroll">
        {items.map((item, i) => (
          <CartItem
            variant="flyout-cart"
            key={i}
            item={item}
            allowDelete={false}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div>
          <div className="flex justify-between py-3  border-b ">
            <p>Shipping</p>
            <p className="font-Poppins font-semibold first-letter:uppercase">
              {shippingType}
            </p>
          </div>
          <div className="flex justify-between py-3  border-b ">
            <p>Price</p>
            <p className="font-Poppins font-semibold ">{`$${price}`}</p>
          </div>
          <div className="flex justify-between py-3 border-b ">
            <p>Total discount</p>
            <p className="font-Poppins font-semibold text-red-500">{`-$${totalDiscount}`}</p>
          </div>
          <div className="font-Poppins font-medium text-xl flex justify-between py-3">
            <p>Total</p>
            <p>{`$${
              shippingType === 'free' ? totalPrice : totalPrice + 15
            }`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
