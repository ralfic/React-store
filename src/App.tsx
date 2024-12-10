import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ReactNode } from 'react';
import clsx from 'clsx';

export default function App() {
  return (
    <BaseLayout header={<Header />} footer={<Footer />}>
      <Outlet />
    </BaseLayout>
  );
}

function BaseLayout({
  children,
  header,
  footer,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <Wrapper>{header}</Wrapper>
      {children}
      <div className="mt-auto">{footer}</div>
    </div>
  );
}

function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('max-w-[1120px] w-full mx-auto', className)}>
      {children}
    </div>
  );
}
