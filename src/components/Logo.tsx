import { clsx } from 'clsx';

interface IProps {
  className?: string;
}

export default function Logo({ className }: IProps) {
  return (
    <h1
      className={clsx(
        'font-medium text-2xl leading-6 cursor-pointer',
        className
      )}
    >
      React store
    </h1>
  );
}
