import { RxEnvelopeClosed } from 'react-icons/rx';

export default function BannerJoinNewsletter() {
  return (
    <article className="w-full  bg-banner-fon-join py-24 font-Poppins bg-center bg-no-repeat bg-[#e2e4e3]">
      <div className="flex flex-col items-center justify-center max-w-[488px]  mx-auto w-full px-8">
        <h3 className="font-medium text-[40px] leading-[44px] mb-2 text-center max-md:text-[28px] max-md:leading-[32px] dark:text-black">
          Join Our Newsletter
        </h3>
        <p className="text-lg max-md:text-sm mb-8 text-center dark:text-black">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex items-center justify-center gap-2 border-b border-gray-500 w-full">
          <RxEnvelopeClosed className="w-6 h-6 dark:text-black" />
          <input
            className="bg-transparent py-3 outline-none placeholder:text-gray-500 w-full"
            type="text"
            name=""
            id=""
            placeholder="Email address"
          />
          <button className="font-medium text-gray-500" type="submit">
            Signup
          </button>
        </div>
      </div>
    </article>
  );
}
