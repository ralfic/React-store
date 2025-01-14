import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../uikit/Button';
import OrderSummary from './OrderSummary';
import { useCreateOrderMutation } from '@/api/user/userApi';
import { IOrder } from '@/types';
import { clearCart } from '@/store/slices/cart/cart.slice';
import useCreateOrder from '@/hooks/useCreateOrder';
import { toast } from 'react-toastify';
import ContactForm from './checkoutForms/ContactForm';
import PaymentMethodForm from './checkoutForms/PaymentMethodForm';
import ShippingAddressForm from './checkoutForms/ShippingAddressForm';

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
    toast.success('Order complete');
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
            <ContactForm />
            <ShippingAddressForm />
            <PaymentMethodForm />
            <Button>Place Order</Button>
          </form>
        </FormProvider>
      </div>
      <OrderSummary />
    </div>
  );
}
