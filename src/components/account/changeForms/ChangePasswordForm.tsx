import { Button } from '../../uikit/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store';
import { useChangeUserPasswordMutation } from '@/api/user/userApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ErrorMessageForm from '../../uikit/ErrorMessageForm';
import { clearAuth } from '@/store/slices/auth/authSlice';
import { clearUser } from '@/store/slices/user/userSlice';
import isFetchBaseQueryError from '@/helpers/isFetchBaseQueryError';
import FormInput from '@/components/uikit/FormInput';
import { useEffect } from 'react';

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
  const [changeUserPassword, { data: resp, error }] =
    useChangeUserPasswordMutation();

  const methods = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { reset, handleSubmit } = methods;

  const navigation = useNavigate();

  useEffect(() => {
    if (resp) {
      navigation('/');
      reset();
      dispatch(clearAuth());
      dispatch(clearUser());
    }
  }, [resp]);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const { newPassword, oldPassword } = data;
    try {
      await changeUserPassword({
        newPassword,
        oldPassword,
        email,
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
        <h2 className="text-xl font-semibold mt-10">Password</h2>
        <FormInput
          name="oldPassword"
          label="Old password"
          placeholder="Old password"
        />
        <FormInput
          name="newPassword"
          label="New password"
          placeholder="New password"
        />
        <FormInput
          name="repeatPassword"
          label="Repeat new password"
          placeholder="Repeat new password"
        />
        <ErrorMessageForm
          message={`${
            (isFetchBaseQueryError(error) && error?.data?.message) || ''
          }`}
        />
        <Button className="max-w-fit">Save password</Button>
      </form>
    </FormProvider>
  );
}