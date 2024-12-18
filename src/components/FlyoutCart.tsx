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
import FlyoutCartItem from './FlyoutCartItem';
import { Button } from './uikit/Button';
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

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => dispatch(toggleCart(e.open))}
      size={'sm'}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-Poppins font-medium text-2xl flex justify-between">
            <h2> Cart</h2>
            <button className='pr-4' onClick={() => dispatch(clearCart())}>
              <BsTrash3Fill className="w-5 h-5" />
            </button>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="flex gap-6 flex-col ">
          {items.map((items) => (
            <FlyoutCartItem item={items} key={items.id} />
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
            <Button>Checkout</Button>
            <Link
              className="font-semibold border-b border-black text-center self-center"
              to={'/'}
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
