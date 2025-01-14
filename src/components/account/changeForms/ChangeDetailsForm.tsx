import { Button } from '../../uikit/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  useAddAccountDetailsMutation,
  useGetUserQuery,
} from '@/api/user/userApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/components/uikit/FormInput';

interface IFormValues {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .max(16)
    .required('FirstName is a required field'),
  lastName: yup
    .string()
    .min(3)
    .max(16)
    .required('LastName is a required field'),
  name: yup.string().min(3).max(16).required('Name is a required field'),
  email: yup.string().email().required('Email is a required field'),
});

export default function ChangeDetailsForm() {
  const { data: user } = useGetUserQuery();
  const [addAccountDetails] = useAddAccountDetailsMutation();

  const methods = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      await addAccountDetails(data)
        .unwrap()
        .then(() => {
          reset();
        });
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {  
        throw new Error(`Unexpected error: ${String(error)}`);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold">Account Details</h2>
        <FormInput
          label="First name"
          placeholder="First name"
          name="firstName"
          required
          defaultValue={user?.firstName}
        />
        <FormInput
          label="Last name"
          placeholder="Last name"
          name="lastName"
          required
          defaultValue={user?.lastName}
        />
        <FormInput
          label="Display name"
          placeholder="Display name"
          name="name"
          helperText="This will be how your name will be displayed in the account section and in reviews"
          required
          defaultValue={user?.name}
        />
        <FormInput
          label="Email"
          placeholder="Email"
          name="email"
          required
          defaultValue={user?.email}
        />
        <Button className="max-w-fit">Save changes</Button>
      </form>
    </FormProvider>
  );
}
