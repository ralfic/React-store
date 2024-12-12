import clsx from 'clsx';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function ShopCollection() {
  return (
    <section className="max-w-wrapper w-full mx-auto pt-12">
      <h2 className="font-semibold text-4xl mb-12 font-Poppins">
        Shop Collection
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <ShopCollectionCard
          title={'mobile'}
          img="/shope-collection/mobile.png"
          type="lg"
          link={'mobile'}
        />
        <div className="grid grid-rows-[repeat(2,_minmax(0,_320px))] gap-6">
          <ShopCollectionCard
            title={'gaming'}
            img="/shope-collection/gaming.png"
            link={'gaming'}
          />
          <ShopCollectionCard
            title={'audio'}
            img="/shope-collection/audio.png"
            link={'audio'}
          />
        </div>
      </div>
    </section>
  );
}

interface ICollectionCardProps {
  title: string;
  img: string;
  type?: 'lg' | 'sm';
  link: string;
}

function ShopCollectionCard({
  title,
  img,
  type = 'sm',
  link,
}: ICollectionCardProps) {
  return (
    <div
      className={clsx(
        'flex p-12 box-border bg-gray-200/70 hover:scale-[1.02] transition-all ease-in-out ',
        type === 'sm' ? 'flex-row justify-between' : 'flex-col'
      )}
    >
      {type === 'lg' && (
        <div className="h-full w-full mb-4">
          <img
            className="object-contain  h-full w-full "
            src={img}
            alt={title}
          />
        </div>
      )}
      <div className="mt-auto">
        <h3 className="font-medium text-[34px] leading-[38px] font-Poppins mb-3 first-letter:uppercase">
          {title}
        </h3>
        <a className="inline-flex items-center justify-center border-b cursor-pointer border-black s font-medium">
          Collection
          <HiOutlineArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
      {type === 'sm' && (
        <div className="h-full w-full ml-4">
          <img
            className="object-contain  h-full w-full"
            src={img}
            alt={title}
          />
        </div>
      )}
    </div>
  );
}
