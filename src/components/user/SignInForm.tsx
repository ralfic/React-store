import { useSignInMutation } from '@/api/auth/authApi';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/uikit/Button';
import { useAppDispatch } from '@/store';
import ErrorMessageForm from '@/components/uikit/ErrorMessageForm';
import { setAuth } from '@/store/slices/auth/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import FormInput from '../uikit/FormInput';
import FormPasswordInput from '../uikit/FormPasswordInput';
import isSerializedError from '@/helpers/isSerializedError';

interface ISignInForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export default function SignInForm() {
  const methods = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { reset, handleSubmit } = methods;

  const [signIn, { error }] = useSignInMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    try {
      await signIn(data)
        .unwrap()
        .then((res) => {
          navigate('/');
          reset();
          toast.success('Login successful');
          dispatch(setAuth(res));
        });
    } catch (error) {
      toast.error('Login error');
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="max-w-[460px] max-lg:max-w-[420px] content-center  pl-16 max-lg:pl-10 max-md:pl-0 max-md:mx-auto w-full pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <div className="mb-8">
            <h1 className="font-medium text-4xl font-Poppins mb-6">Sign in</h1>
            <p className="text-gray-400 ">
              Already have an account?
              <Link to={'/signup'} className="text-green-400 cursor-pointer">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <FormInput
              name="email"
              placeholder="Your email address"
              variant="flushed"
            />
            <FormPasswordInput
              name="password"
              placeholder="Password"
              variant="flushed"
            />
            <ErrorMessageForm
              message={(isSerializedError(error) && error.data) || ''}
            />
          </div>
        </div>
        <Button>Sign In</Button>
      </form>
    </FormProvider>
  );
}
