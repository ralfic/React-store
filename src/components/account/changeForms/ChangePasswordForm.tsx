import { Input } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { Button } from '../../uikit/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store';
import { useChangeUserPasswordMutation } from '@/api/user/userApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ErrorMessageForm from '../../uikit/ErrorMessageForm';
import { clearAuth } from '@/store/slices/auth/authSlice';
import { clearUser } from '@/store/slices/user/userSlice';
import isFetchBaseQueryError from '@/helpers/isFetchBaseQueryError';

interface IFormValues {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

const schema = yup.object().shape({
  oldPassword: yup.string().required('Your password is required'),
  newPassword: yup.string().min(8).max(16).required('New password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'Passwords must match')
    .required('Repeat password is required'),
});



export default function ChangePasswordForm() {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user);
  const [changeUserPassword, { data: resp, error }] = useChangeUserPasswordMutation();

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
    const { newPassword, oldPassword } = data;
    try {
      await changeUserPassword({
        newPassword,
        oldPassword,
        email,
      });

      if (!error && resp) {
        navigation('/');
        reset();
        dispatch(clearAuth());
        dispatch(clearUser());
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
      <h2 className="text-xl font-semibold mt-10">Password</h2>
      <Field className="text-gray-600" label="Old password">
        <Input
          {...register('oldPassword')}
          className="border pl-4 w-full"
          placeholder="Old password"
          variant="outline"
          colorPalette="black"
        />
        <ErrorMessageForm message={errors?.oldPassword?.message} />
      </Field>
      <Field className="text-gray-600" label="New password">
        <Input
          {...register('newPassword')}
          className="border pl-4 w-full"
          placeholder="New password"
          variant="outline"
          colorPalette="black"
        />
      </Field>
      <Field className="text-gray-600" label="Repeat new password">
        <Input
          {...register('repeatPassword')}
          className="border pl-4 w-full"
          placeholder="Repeat new password"
          variant="outline"
          colorPalette="black"
        />
        <ErrorMessageForm message={errors?.repeatPassword?.message} />
      </Field>
      <ErrorMessageForm
        message={`${
          (isFetchBaseQueryError(error) && error?.data?.message) || ''
        }`}
      />
      <Button className="max-w-fit">Save password</Button>
    </form>
  );
}
