import { Input } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { Button } from '../../uikit/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/store';
import { useAddAccountDetailsMutation } from '@/api/user/userApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ErrorMessageForm from '../../uikit/ErrorMessageForm';

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
  const { id, name, firstName, lastName, email } = useAppSelector(
    (state) => state.user
  );
  const { token } = useAppSelector((state) => state.auth);
  const [addAccountDetails] = useAddAccountDetailsMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const navigation = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      const response = await addAccountDetails({
        token,
        id,
        userData: data,
      }).unwrap();
      if (response) {
        navigation(0);
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-semibold">Account Details</h2>
      <Field className="text-gray-600" label="First name" required>
        <Input
          {...register('firstName')}
          className="border pl-4 w-full"
          placeholder="First name"
          variant="outline"
          colorPalette="black"
          defaultValue={firstName}
        />
        <ErrorMessageForm message={errors?.firstName?.message} />
      </Field>

      <Field className="text-gray-600" label="Last name" required>
        <Input
          {...register('lastName')}
          className="border pl-4 w-full"
          placeholder="Last name"
          variant="outline"
          colorPalette="black"
          defaultValue={lastName}
        />
        <ErrorMessageForm message={errors?.lastName?.message} />
      </Field>
      <Field
        className="text-gray-600"
        label="Display name"
        required
        helperText="This will be how your name will be displayed in the account section and in reviews"
      >
        <Input
          {...register('name')}
          className="border pl-4 w-full"
          placeholder="Display name"
          variant="outline"
          colorPalette="black"
          defaultValue={name}
        />
        <ErrorMessageForm message={errors?.name?.message} />
      </Field>
      <Field className="text-gray-600" label="Email" required>
        <Input
          {...register('email')}
          className="border pl-4 w-full"
          placeholder="Email"
          variant="outline"
          colorPalette="black"
          defaultValue={email}
        />
        <ErrorMessageForm message={errors?.email?.message} />
      </Field>

      <Button className="max-w-fit">Save changes</Button>
    </form>
  );
}
