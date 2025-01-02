import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useAppDispatch, useAppSelector } from '@/store';
import CartItem from './CartItem';
import { Button } from '../uikit/Button';
import { Link } from 'react-router-dom';
import { toggleCart } from '@/store/slices/flyoutCartSlice';
import { BsTrash3Fill } from 'react-icons/bs';
import { clearCart } from '@/store/slices/cart/cartSlice';
export function FlyoutCart() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.flyoutCar);
  const { items, totalPrice, totalDiscount, price } = useAppSelector(
    (state) => state.cart
  );
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => dispatch(toggleCart(e.open))}
      size={'sm'}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-Poppins font-medium text-2xl ">
            Cart
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="flex gap-6 flex-col scroll">
          {items.map((items) => (
            <CartItem item={items} key={items.id} variant="flyout-cart" />
          ))}
        </DrawerBody>
        <DrawerFooter>
          <div className="w-full flex flex-col gap-4 pb-5">
            <div>
              <div className="flex justify-between py-3">
                <p>Price</p>
                <p className="font-Poppins font-semibold ">{`$${price}`}</p>
              </div>
              <div className="flex justify-between py-3 border-b ">
                <p>Total discount</p>
                <p className="font-Poppins font-semibold text-red-500">{`-$${totalDiscount}`}</p>
              </div>
              <div className="font-Poppins font-medium text-xl flex justify-between py-3">
                <p>Total</p>
                <p>{`$${totalPrice}`}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                onClick={() => dispatch(toggleCart(false))}
                className="w-full"
                to={isAuthenticated ? '/cart' : '/signin'}
              >
                <Button>Checkout</Button>
              </Link>
              <button
                className=" bg-gray-200 rounded-lg px-3"
                onClick={() => dispatch(clearCart())}
              >
                <BsTrash3Fill className="w-5 h-5 mx-auto dark:fill-black" />
              </button>
            </div>
            <Link
              onClick={() => dispatch(toggleCart(false))}
              className="font-semibold border-b border-black dark:border-white text-center self-center"
              to={isAuthenticated ? '/cart' : '/signin'}
            >
              View Cart
            </Link>
          </div>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
