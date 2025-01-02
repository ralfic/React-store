import { useAppSelector } from '@/store';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

interface IProps {
  setActiveStep: () => void;
}

export default function CartShopping({ setActiveStep }: IProps) {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className="py-20 w-full flex gap-16 max-lg:flex-col">
      <div className="w-full">
        <div className="flex flex-col max-h-[460px] scroll pr-2 overflow-y-scroll ">
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <CartSummary setActiveStep={setActiveStep} />
    </div>
  );
}
