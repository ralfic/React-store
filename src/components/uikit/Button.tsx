import clsx from 'clsx';

interface IButton {
  children: string;
  type?: 'dark' | 'light';
}

export function Button({ children, type = 'dark' }: IButton) {
  return (
    <button
      className={clsx(
        'rounded-lg py-2 px-14 text-lg font-medium leading-8 outline-none transition-colors',
        type === 'dark'
          ? 'text-white bg-black hover:bg-white hover:text-black'
          : 'text-black bg-white hover:text-white hover:bg-black'
      )}
    >
      {children}
    </button>
  );
}
