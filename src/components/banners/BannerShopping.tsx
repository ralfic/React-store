import { Link } from 'react-router-dom';
import { Button } from '../uikit/Button';

export default function BannerShopping() {
  return (
    <section className="w-full max-w-wrapper mx-auto max-h-[636px]  bg-banner-fon h-full text-white flex items-center justify-center font-Poppins">
      <div className="max-w-[760px]  text-center py-36">
        <h2 className="text-6xl  font-medium mb-2">
          Listen to the amazing music sound.
        </h2>
        <p className="text-xl mb-7">Experience music like never before</p>
        <Link to={"/shope"}><Button>Shopping Now</Button></Link>
      </div>
    </section>
  );
}
