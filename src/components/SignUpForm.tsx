import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/uikit/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '@/store';
import ErrorMessageForm from './uikit/ErrorMessageForm';
import { setAuth } from '@/store/slices/auth/authSlice';
import { useSignUpMutation } from '@/api/auth/authApi';
import FormInput from './uikit/FormInput';
import FormPasswordInput from './uikit/FormPasswordInput';

interface ISignUpForm {
  email: string;
  name: string;
  password: string;
  agree: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required('Password is a required field'),
  name: yup.string().min(3).max(32).required('Name is a required field'),
  agree: yup
    .bool()
    .required('You must agree to the terms')
    .oneOf([true], 'You must agree to the terms'),
});

export default function SignUpForm() {
  const methods = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const {
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const [signUp] = useSignUpMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
    const { name, email, password } = data;
    if (data.agree) {
      try {
        const response = await signUp({ name, email, password }).unwrap();
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
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[460px] content-center pl-20"
      >
        <div className="mb-8">
          <h1 className="font-medium text-4xl font-Poppins mb-6">Sign up</h1>
          <p className="text-gray-400 ">
            Already have an account?
            <Link to={'/signin'} className="text-green-400 cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-6 mb-8">
          <FormInput name="name" placeholder="Name" variant="flushed" />
          <FormInput
            name="email"
            placeholder="Email address"
            variant="flushed"
          />
          <FormPasswordInput
            name="password"
            placeholder="Password"
            variant="flushed"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <Checkbox
                variant={'subtle'}
                onCheckedChange={(e) => setValue('agree', !!e.checked)}
              />
              <p className="text-gray-400">
                I agree with
                <span className="text-black font-semibold">Privacy Policy</span>
                and
                <span className="text-black font-semibold"> Terms of Use</span>
              </p>
            </div>
            <ErrorMessageForm message={errors?.agree?.message} />
          </div>
        </div>
        <Button>Sign Up</Button>
      </form>
    </FormProvider>
  );
}
