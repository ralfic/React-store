import { ShopCollectionCard } from './ShopeCollectionCard';

export default function ShopCollection() {
  return (
    <article className="max-w-wrapper w-full mx-auto pt-12  select-none">
      <h2 className="font-semibold text-4xl mb-12 font-Poppins ">
        Shop Collection
      </h2>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <ShopCollectionCard
          title={'mobile'}
          img="/shope-collection/mobile.png"
          type="lg"
        />
        <div className="grid grid-rows-[repeat(2,_minmax(0,_320px))] gap-6 max-md:grid-rows-[repeat(2,_minmax(0,_280px))] max-sm:grid-rows-[repeat(2,_minmax(0,_240px))]">
          <ShopCollectionCard
            title={'gaming'}
            img="/shope-collection/gaming.png"
          />
          <ShopCollectionCard
            title={'audio'}
            img="/shope-collection/audio.png"
          />
        </div>
      </div>
    </article>
  );
}
