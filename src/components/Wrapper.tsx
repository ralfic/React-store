import clsx from 'clsx';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className }: IProps) {
  return (
    <div className={clsx('max-w-[1120px] w-full mx-auto', className)}>
      {children}
    </div>
  );
}
