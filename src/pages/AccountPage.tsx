import {  Outlet } from 'react-router-dom';
import AccountSidebar from '@/components/account/AccountSidebar';

export default function AccountPage() {
  return (
    <div className="pb-20 max-w-wrapper mx-auto px-8">
      <h1 className="font-Poppins text-5xl font-medium text-center p-20 max-xs:p-10">
        My Account
      </h1>
      <div className="flex gap-2 max-sm:flex-col ">
        <AccountSidebar />
        <div className="w-full px-[72px] max-lg:px-[52px] max-md:px-0 max-md:pl-[52px] max-sm:pl-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
