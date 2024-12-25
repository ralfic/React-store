import { Radio, RadioGroup } from '@/components/ui/radio';
import { Button } from '../uikit/Button';
import { useState } from 'react';
import { ICartItem } from '@/types';
import { Table } from '@chakra-ui/react';

const shippingTypes = [
  { title: 'Free shipping', price: 0, value: '1' },
  { title: 'Express shipping', price: 15, value: '2' },
];

interface IProps {
  items: ICartItem[];
  totalPrice: number;
  totalDiscount: number;
  price: number;
}

export default function CartShopping({
  items,
  totalDiscount,
  totalPrice,
  price,
}: IProps) {
  const [value, setValue] = useState('1');
  return (
    <div className="py-20 w-full flex gap-16">
      <div className="w-full">
        <Table.Root className="w-full" size="lg">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Quantity</Table.ColumnHeader>
              <Table.ColumnHeader>Price</Table.ColumnHeader>
              <Table.ColumnHeader>Subtotal</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <div className="flex gap-4">
                    <img className="w-20 h-20" src={item.image} alt="" />
                    <div className="">
                      <h5 className="text-nowrap whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                        {item.title}
                      </h5>
                      <p>{item.model}</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell textAlign="end">{item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      <div className="border border-black rounded-md p-6 max-w-[420px] w-full">
        <h3 className="text-xl font-medium font-Poppins mb-4">Cart summary</h3>
        <ul className="flex flex-col gap-3 mb-4">
          {shippingTypes.map((element, i) => (
            <li
              className="px-4 py-3 border border-black rounded-lg flex items-center justify-between"
              key={i}
            >
              <RadioGroup
                colorPalette="gray"
                variant="outline"
                value={value}
                onValueChange={(e) => setValue(e.value)}
              >
                <Radio
                  className="mr-2 relative top-1 border border-black rounded-full"
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
              <p>{`$${totalPrice}`}</p>
            </div>
          </div>
        </div>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
