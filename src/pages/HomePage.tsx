import BannerShopping from '../components/banners/BannerShopping';
import BannerInformation from '../components/banners/BannerInformation';
import { ProductsList } from '../components/ProductsList';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import ShopCollection from '../components/ShopCollection';
import { useGetProductsQuery } from '@/api/productApi';

export default function HomePage() {
  const { data: dataProducts, isLoading } = useGetProductsQuery({});
  const { data: dataRandomProducts } = useGetProductsQuery({
    random: true,
  });

  return (
    <main>
      <BannerShopping />
      <ProductsList
        typeArrangement="row"
        title="New Arrivals"
        isLoading={isLoading}
        products={dataProducts?.products}
      />
      <ShopCollection />
      <ProductsList
        typeArrangement="col"
        title="Best Seller"
        products={dataRandomProducts?.products}
        isLoading={isLoading}
      />
      <BannerInformation />
      <BannerJoinNewsletter />
    </main>
  );
}
