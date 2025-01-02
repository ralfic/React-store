import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
}

export default function Logo({ className }: IProps) {
  return (
    <Link to="/">
      <h1
        className={clsx(
          'font-medium text-2xl leading-6 cursor-pointer font-Poppins text-nowrap',
          className
        )}
      >
        React store
      </h1>
    </Link>
  );
}
