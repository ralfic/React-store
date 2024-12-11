import clsx from 'clsx';

interface IButton {
  children: string;
  current?: 'dark' | 'light';
  size?: 'lg' | 'sm';
  className?: string;
}

export function Button({
  children,
  current = 'dark',
  size = 'lg',
  className,
}: IButton) {
  return (
    <button
      className={clsx(
        'rounded-lg   font-medium leading-8 outline-none transition-colors border',
        current === 'dark'
          ? 'text-white border-black bg-black hover:bg-white hover:text-black'
          : 'text-black border-white bg-white hover:text-white hover:bg-black',
        size === 'lg' ? 'py-2.5 px-12 text-lg' : 'py-1 w-full text-base',
        className
      )}
    >
      {children}
    </button>
  );
}
