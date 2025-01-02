import { Radio, RadioGroup } from '@/components/ui/radio';
import { Button } from '../uikit/Button';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setShippingType } from '@/store/slices/cart/cartSlice';

const shippingTypes = [
  { title: 'Free shipping', price: 0, value: 'free' },
  { title: 'Express shipping', price: 15, value: 'express' },
];

interface IProps {
  setActiveStep: () => void;
}

export default function CartSummary({ setActiveStep }: IProps) {
  const { totalPrice, totalDiscount, price, totalQuantity, shippingType } =
    useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('free');

  useEffect(() => {
    dispatch(setShippingType(value));
  }, [dispatch, value]);

  return (
    <div className="border border-black rounded-md p-6 max-w-[420px] w-full h-fit max-lg:max-w-full  dark:border-white">
      <h3 className="text-xl font-medium font-Poppins mb-4">Cart summary</h3>
      <ul className="flex flex-col gap-3 mb-4">
        {shippingTypes.map((element, i) => (
          <li
            className="px-4 py-3 border border-black dark:border-white rounded-lg flex items-center justify-between bg-black"
            key={i}
          >
            <RadioGroup
              colorPalette="gray"
              variant="outline"
              value={value}
              defaultValue={shippingType}
              onValueChange={(e) => setValue(e.value)}
            >
              <Radio
                className="mr-2 relative top-1 border border-black  dark:border-white rounded-full dark:bg-gray-800"
                value={element.value}
              ></Radio>
              {element.title}
            </RadioGroup>
            {`${element.price}$`}
          </li>
        ))}
      </ul>
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
            <p>{`$${
              shippingType === 'free' ? totalPrice : totalPrice + 15
            }`}</p>
          </div>
        </div>
      </div>
      <Button onClick={setActiveStep} disabled={totalQuantity === 0}>
        Checkout
      </Button>
    </div>
  );
}
