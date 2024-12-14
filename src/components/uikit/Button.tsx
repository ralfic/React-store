import clsx from 'clsx';
import { ReactNode } from 'react';

interface IButton {
  children: string;
  current?: 'dark' | 'light';
  size?: 'lg' | 'sm';
  className?: string;
  icon?: ReactNode;
}

export function Button({
  children,
  current = 'dark',
  size = 'lg',
  className,
  icon,
}: IButton) {
  return (
    <button
      className={clsx(
        'rounded-lg   font-medium leading-8 outline-none transition-colors border flex gap-2 items-center justify-center',
        current === 'dark'
          ? 'text-white border-black bg-black hover:bg-white hover:text-black'
          : 'text-black border-black bg-white hover:text-white hover:bg-black',
        size === 'lg' ? 'py-2.5 px-12 text-lg' : 'py-1 w-full px-6 text-base',
        className
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
}
