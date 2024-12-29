import CartShopping from '@/components/cart/CartShopping';
import Checkout from '@/components/cart/Checkout';
import OrderComplete from '@/components/cart/OrderComplete';
import {
  StepsContent,
  StepsItem,
  StepsList,
  StepsRoot,
} from '@/components/ui/steps';
import { useState } from 'react';

export default function CartPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentOrderId, setCurrentOrderId] = useState<null | string>(null);

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
          step={activeStep}
        >
          <StepsList className="w-[880px] mx-auto">
            <StepsItem
              index={0}
              title="Shopping cart"
              onClick={() => setActiveStep(0)}
            />
            <StepsItem
              index={1}
              title="Checkout details"
              pointerEvents={'none'}
            />
            <StepsItem index={2} title="Order complete"     onClick={() => setActiveStep(2)}/>
          </StepsList>
          <StepsContent index={0}>
            <CartShopping setActiveStep={() => setActiveStep(1)} />
          </StepsContent>
          <StepsContent index={1}>
            <Checkout
              setActiveStep={() => setActiveStep(2)}
              setCurrentOrderId={(id) => setCurrentOrderId(id)}
            />
          </StepsContent>
          <StepsContent index={2}>
            <OrderComplete currentOrderId={currentOrderId} />
          </StepsContent>
        </StepsRoot>
      </div>
    </div>
  );
}
