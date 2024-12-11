import { ReactNode } from 'react';
import {
  PiLockKeyLight,
  PiMoneyWavyLight,
  PiPhoneLight,
  PiTruckLight,
} from 'react-icons/pi';

export default function BannerInformation() {
  return (
    <section className="grid grid-cols-4 gap-6 max-w-wrapper w-full mx-auto py-10">
      <BannerInformationCard
        title="Free Shipping"
        description="Order above $200"
        icon={<PiTruckLight className="w-12 h-12" />}
      />
      <BannerInformationCard
        title="Money-back"
        description="30 days guarantee"
        icon={<PiMoneyWavyLight className="w-12 h-12" />}
      />
      <BannerInformationCard
        title="Secure Payments"
        description="Secured by Stripe"
        icon={<PiLockKeyLight className="w-12 h-12" />}
      />
      <BannerInformationCard
        title="24/7 Support"
        description="Phone and Email support"
        icon={<PiPhoneLight className="w-12 h-12" />}
      />
    </section>
  );
}

interface IBannerCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

function BannerInformationCard({ title, description, icon }: IBannerCardProps) {
  return (
    <div className="flex flex-col px-8 py-12 bg-gray-200/55 font-Poppins hover:scale-105 transition-all ease-in-out">
      <span className="mb-4">{icon}</span>
      <h3 className="mb-2 font-medium text-5">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
