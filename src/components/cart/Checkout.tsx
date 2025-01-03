import { HStack, Icon } from '@chakra-ui/react';
import { RadioCardItem, RadioCardRoot } from '@/components/ui/radio-card';
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from 'react-icons/ri';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../uikit/Button';
import OrderSummary from './OrderSummary';
import FormInput from '../uikit/FormInput';
import { useCreateOrderMutation } from '@/api/user/userApi';
import { IOrder } from '@/types';
import { clearCart } from '@/store/slices/cart/cartSlice';
import useCreateOrder from '@/hooks/useCreateOrder';
import { toast } from 'react-toastify';

const itemsPay = [
  { value: 'paypal', title: 'Paypal', icon: <RiPaypalFill /> },
  { value: 'apple-pay', title: 'Apple Pay', icon: <RiAppleFill /> },
  { value: 'card', title: 'Card', icon: <RiBankCardFill /> },
];

export type FormCheckout = Omit<
  IOrder,
  'id' | 'dateCreated' | 'items' | 'totalPrice'
>;

const schema = yup.object().shape({
  firstName: yup.string().trim().required('First name is required'),
  lastName: yup.string().trim().required('Last name is required'),
  phoneNumber: yup
    .string()
    .matches(
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      'Phone number is not valid'
    )
    .typeError('Phone number must be a valid number')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email address'),
  country: yup.string().trim().required('Country is required'),
  stressAddress: yup.string().trim().required('Street address is required'),
  town_city: yup.string().trim().required('Town/City is required'),
  state: yup.string().trim(),
  cardNumber: yup
    .string()
    .matches(/^\d{13,19}$/, 'Card number must be between 13 and 19 digits')
    .typeError('Card number must be a valid number')
    .required('Card number is required'),
  cvcCode: yup
    .number()
    .typeError('CVC code must be a valid number')
    .min(100, 'CVC code must be 3 digits')
    .max(999, 'CVC code must be 3 digits')
    .required('CVC code is required'),
  ExpirationDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      'Expiration date must be in MM/YY format'
    )
    .required('Expiration date is required'),
});

interface IProps {
  setActiveStep: () => void;
  setCurrentOrderId: (id: string) => void;
}

export default function Checkout({ setActiveStep, setCurrentOrderId }: IProps) {
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();
  const { dateCreate, orderItems, idOrder, totalPriceOrder } = useCreateOrder();

  const methods = useForm<FormCheckout>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormCheckout> = (data) => {
    setCurrentOrderId(idOrder);

    createOrder({
      ...data,
      id: idOrder,
      dateCreated: dateCreate,
      items: orderItems,
      totalPrice: totalPriceOrder,
    });
    toast.success("Order complete")
    setActiveStep();
    reset();
    dispatch(clearCart());
  };

  return (
    <div className="max-w-wrapper w-full py-20 flex gap-16 max-lg:flex-col">
      <div className="flex flex-col gap-6 max-w-[643px] w-full max-lg:max-w-full">
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white">
              <h2 className="font-Poppins text-xl font-medium">
                Contact Infomation
              </h2>
              <div className="flex gap-6">
                <FormInput
                  label="First name"
                  placeholder="First name"
                  name="firstName"
                  required
                />
                <FormInput
                  label="Last name"
                  placeholder="Last name"
                  name="lastName"
                  required
                />
              </div>
              <FormInput
                label="Phone Number"
                placeholder="Phone Number"
                name="phoneNumber"
                required
              />
              <FormInput
                label="Email address"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white">
              <h2 className="font-Poppins text-xl font-medium">
                Shipping Address
              </h2>
              <FormInput
                label="Stress Address"
                placeholder="Stress Address"
                name="stressAddress"
                required
              />
              <FormInput
                label="Country"
                placeholder="Country"
                name="country"
                required
              />
              <FormInput
                label="Town / City"
                placeholder="Town / City"
                name="town_city"
                required
              />
              <div className="flex gap-6">
                <FormInput label="State" placeholder="State" name="state" />
                <FormInput
                  label="Zip Code"
                  placeholder="Zip Code"
                  name="zipCode"
                />
              </div>
            </div>
            <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white">
              <h2 className="font-Poppins text-xl font-medium">
                Payment method
              </h2>
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
                <FormInput
                  label="CVC"
                  placeholder="CVC code"
                  name="cvcCode"
                  required
                />
              </div>
            </div>
            <Button>Place Order</Button>
          </form>
        </FormProvider>
      </div>
      <OrderSummary />
    </div>
  );
}
