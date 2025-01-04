import clsx from 'clsx';
import { ReactNode } from 'react';

interface IButton {
  children: string;
  type?: 'solid' | 'outline';
  rounded?: boolean;
  className?: string;
  icon?: ReactNode;
  size?: 'lg' | 'base';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  type = 'solid',
  className,
  icon,
  rounded = false,
  size = 'base',
  onClick,
  disabled = false,
}: IButton) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'font-medium leading-8 outline-none transition-colors border flex gap-2 items-center justify-center w-full font-Inter text-nowrap',
        type === 'solid'
          ? 'text-white border-black bg-black hover:bg-white hover:text-black dark:bg-violet-400 dark:text-black dark:hover:text-violet-400  dark:border-violet-400'
          : 'text-black border-black bg-white hover:text-white hover:bg-black dark:hover:bg-violet-400',
        rounded ? 'rounded-3xl' : 'rounded-lg',
        size === 'base' ? 'py-1.5 px-10' : 'py-2.5 px-14',
        className
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
}
