import { useSignInMutation } from '@/api/auth/authApi';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/uikit/Button';
import { useAppDispatch } from '@/store';
import ErrorMessageForm from '@/components/uikit/ErrorMessageForm';
import { setAuth } from '@/store/slices/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import isSerializedError from '@/helpers/isSerializedError';

interface ISignInForm {
  email: string;
  password: string;
  remember?: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
  remember: yup.boolean(),
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [signIn, { error }] = useSignInMutation();
  console.log(error);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      if (response) {
        dispatch(setAuth(response));
        navigate('/');
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
    <form
      className="max-w-[460px] content-center pl-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8">
        <h1 className="font-medium text-4xl font-Poppins mb-6">Sign in</h1>
        <p className="text-gray-400 ">
          Already have an account?
          <Link to={'/signup'} className="text-green-400 cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col gap-0.5">
          <input
            {...register('email')}
            className="border-b py-2 outline-none"
            type="text"
            placeholder="Your email address"
          />
          <ErrorMessageForm message={errors?.email?.message} />
        </div>
        <div className="flex flex-col gap-0.5">
          <input
            {...register('password')}
            className="border-b py-2 outline-none"
            type="text"
            placeholder="Password"
          />
          <ErrorMessageForm message={errors?.password?.message} />
          <ErrorMessageForm
            message={(isSerializedError(error) && error.data) || ''}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            variant={'subtle'}
            onCheckedChange={(e) => setValue('remember', !!e.checked)}
          />
          <div className="flex justify-between w-full">
            <p className="text-gray-400">Remember me</p>
            <p className="font-semibold cursor-pointer">Forgot password?</p>
          </div>
        </div>
      </div>
      <Button>Sign In</Button>
    </form>
  );
}
