import { useFormContext } from 'react-hook-form';
import { PasswordInput } from '@/components/ui/password-input';
import { Field } from '@/components/ui/field';
import ErrorMessageForm from './ErrorMessageForm';
import clsx from 'clsx';
type FormInputProps = {
  name: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string | number;
  type?: string;
  variant?: 'outline' | 'flushed';
};

export default function FormPasswordInput({
  name,
  label,
  placeholder,
  required,
  type = 'text',
  defaultValue,
  variant = 'outline',
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field className="text-gray-600" label={label} required={required}>
      <PasswordInput
        type={type}
        {...register(name)}
        className={clsx(
          variant === 'outline' ? 'border pl-4 w-full' : 'border-b w-full'
        )}
        placeholder={placeholder}
        variant="outline"
        colorPalette="black"
        defaultValue={defaultValue}
        outline={'none'}
      />
      <ErrorMessageForm message={errors[name]?.message?.toString()} />
    </Field>
  );
}
