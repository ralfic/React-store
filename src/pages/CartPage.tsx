import CartShopping from '@/components/cart/CartShopping';
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsRoot,
} from '@/components/ui/steps';
import { useAppSelector } from '@/store';

export default function CartPage() {
  const { items, totalPrice, totalDiscount, price } = useAppSelector(
    (state) => state.cart
  );
  return (
    <div className="py-20 max-w-wrapper mx-auto">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="font-medium text-5xl font-Poppins ">Cart</h1>
        <StepsRoot
          defaultValue={1}
          count={3}
          colorPalette={'green'}
          size="lg"
          variant="subtle"
        >
          <StepsList className="w-[880px] mx-auto">
            <StepsItem index={0} title="Shopping cart" />
            <StepsItem index={1} title="Checkout details" />
            <StepsItem index={2} title="Order complete" />
          </StepsList>

          <StepsContent index={0}>
            <CartShopping
              items={items}
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
              price={price}
            />
          </StepsContent>
          <StepsContent index={1}>Checkout details</StepsContent>
          <StepsContent index={2}>Order complete</StepsContent>
          <StepsCompletedContent>All steps are complete!</StepsCompletedContent>
        </StepsRoot>
      </div>
    </div>
  );
}
