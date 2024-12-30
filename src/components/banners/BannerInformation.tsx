import {
  PiLockKeyLight,
  PiMoneyWavyLight,
  PiPhoneLight,
  PiTruckLight,
} from 'react-icons/pi';

const bannerInformation = [
  {
    title: 'Free Shipping',
    description: 'Order above $200',
    icon: <PiTruckLight className="w-12 h-12" />,
  },
  {
    title: 'Money-back',
    description: '30 days guarantee',
    icon: <PiMoneyWavyLight className="w-12 h-12" />,
  },
  {
    title: 'Secure Payments',
    description: 'Secured by Stripe',
    icon: <PiLockKeyLight className="w-12 h-12" />,
  },
  {
    title: '24/7 Support',
    description: 'Phone and Email support',
    icon: <PiPhoneLight className="w-12 h-12" />,
  },
];

export default function BannerInformation() {
  return (
    <article className="grid grid-cols-4 gap-6 max-w-wrapper w-full mx-auto py-10 select-none max-md:grid-cols-2 max-xs:grid-cols-1">
      {bannerInformation.map((elem, i) => (
        <div
          key={i}
          className="flex flex-col px-8 py-12 bg-gray-200/55 font-Poppins hover:scale-105 transition-all ease-in-out "
        >
          <span className="mb-4">{elem.icon}</span>
          <h3 className="mb-2 font-medium text-5">{elem.title}</h3>
          <p className="text-sm text-gray-500">{elem.description}</p>
        </div>
      ))}
    </article>
  );
}
