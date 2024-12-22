import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="max-w-window mx-auto content-center h-screen">
      <div className="grid grid-cols-2">
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <h2 className="font-Poppins text-2xl font-medium">React store</h2>
          <img
            className="h-full object-contain w-full"
            src="/black-Iphone.png"
            alt=""
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
