import { HStack, Icon } from '@chakra-ui/react';
import { RadioCardItem, RadioCardRoot } from '@/components/ui/radio-card';
import FormInput from '@/components/uikit/FormInput';
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from 'react-icons/ri';

const itemsPay = [
  { value: 'paypal', title: 'Paypal', icon: <RiPaypalFill /> },
  { value: 'apple-pay', title: 'Apple Pay', icon: <RiAppleFill /> },
  { value: 'card', title: 'Card', icon: <RiBankCardFill /> },
];

export default function PaymentMethodForm() {
  return (
    <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white dark:bg-neutral-600">
      <h2 className="font-Poppins text-xl font-medium">Payment method</h2>
      <RadioCardRoot
   
        orientation="horizontal"
        align="center"
        justify="center"
        maxW="lg"
        defaultValue="paypal"
        colorPalette="gray"
      >
        <HStack align="stretch">
          {itemsPay.map((item) => (
            <RadioCardItem
               className='dark:bg-neutral-700'
              label={item.title}
              icon={
                <Icon fontSize="2xl" color="fg.subtle">
                  {item.icon}
                </Icon>
              }
              indicator={false}
              key={item.value}
              value={item.value}
            />
          ))}
        </HStack>
      </RadioCardRoot>
      <FormInput
        label="Card Number"
        placeholder="1234 1234 1234"
        name="cardNumber"
        required
      />
      <div className="flex gap-6">
        <FormInput
          label="Expiration date"
          placeholder="MM/YY"
          name="ExpirationDate"
          required
        />
        <FormInput label="CVC" placeholder="CVC code" name="cvcCode" required />
      </div>
    </div>
  );
}
