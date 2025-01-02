import { PiInstagramLogoLight, PiYoutubeLogoLight } from 'react-icons/pi';
import Logo from '../uikit/Logo';
import PageNavigation from '../PageNavigation';

import { LiaFacebookF } from 'react-icons/lia';

export default function Footer() {
  return (
    <footer className="bg-[#141718] pt-20 pb-8 text-white  px-8 max-md:pt-14">
      <div className="max-w-[1120px] w-full mx-auto">
        <div className="flex justify-between items-center mb-12 max-xs:flex-col gap-8">
          <Logo />
          <PageNavigation them="light" />
        </div>
        <div className="flex justify-between text-xs border-t gap-8 border-white py-5 max-xs:flex-col-reverse max-xs:items-center max-sx:py-6">
          <p className="text-gray-200">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <div className="flex gap-7 ">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="flex gap-6">
            <PiInstagramLogoLight className="w-5 h-5 cursor-pointer" />
            <LiaFacebookF className="w-5 h-5 cursor-pointer" />
            <PiYoutubeLogoLight className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
