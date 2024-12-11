import BannerShopping from '../components/banners/BannerShopping';
import BannerInformation from '../components/banners/BannerInformation';
import { ProductsList } from '../components/ProductsList';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import ShopCollection from '../components/ShopCollection';

export default function HomePage() {
  return (
    <main>
      <BannerShopping />
      <ProductsList
        typeProducts="new"
        typeArrangement="row"
        title="New Arrivals"
      />
      <ShopCollection />
      <ProductsList
        typeProducts="hot"
        typeArrangement="col"
        title="Best Seller"
      />
      <BannerInformation />
      <BannerJoinNewsletter />
    </main>
  );
}
