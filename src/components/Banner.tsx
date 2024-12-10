import { Button } from './uikit/Button';

export default function Banner() {
  return (
    <section className="w-full max-w-wrapper mx-auto max-h-[636px]   bg-banner-fon h-full text-white flex items-center justify-center">
      <div className="max-w-[760px]  text-center py-36">
        <h2 className="text-7xl  font-medium mb-2">
          Listen to the amazing music sound.
        </h2>
        <p className="text-xl mb-7">Experience music like never before</p>
        <Button>Shopping Now</Button>
      </div>
    </section>
  );
}
