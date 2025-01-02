import Logo from '@/components/uikit/Logo';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="max-w-window mx-auto content-center h-screen px-8">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 ">
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <Logo />
          <img
            className="h-full object-contain w-full max-md:max-h-[400px] max-lg:max-h-[500px] max-xl:max-h-[600px] "
            src="/black-Iphone.png"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
