import { PiInstagramLogoLight, PiYoutubeLogoLight } from 'react-icons/pi';
import { LiaFacebookF } from 'react-icons/lia';

export default function SocialMediaList() {
  return (
    <>
      <PiInstagramLogoLight className="w-5 h-5 cursor-pointer transition-colors dark:hover:fill-violet-500" />
      <LiaFacebookF className="w-5 h-5 cursor-pointer transition-colors dark:hover:fill-violet-500" />
      <PiYoutubeLogoLight className="w-5 h-5 cursor-pointer transition-colors dark:hover:fill-violet-500" />
    </>
  );
}
