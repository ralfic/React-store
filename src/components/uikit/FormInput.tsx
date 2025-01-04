import { useFormContext } from 'react-hook-form';
import { Input } from '@chakra-ui/react';
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
  helperText?: string;
  variant?: 'outline' | 'flushed';
};

export default function FormInput({
  name,
  label,
  placeholder,
  required,
  type = 'text',
  defaultValue,
  helperText,
  variant = "outline"
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field
      className="text-gray-600 dark:text-neutral-300"
      label={label}
      required={required}
      helperText={helperText}
    >
      <Input
        type={type}
        {...register(name)}
        className={clsx("dark:text-white",
          variant === 'outline' ? 'border pl-4 w-full' : 'border-b w-full'
        )}
        placeholder={placeholder}
        variant="outline"
        colorPalette="black"
        defaultValue={defaultValue}
        outline={"none"}
      />
      <ErrorMessageForm message={errors[name]?.message?.toString()} />
    </Field>
  );
}
