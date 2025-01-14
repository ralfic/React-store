import BannerShopping from '../components/banners/BannerShopping';
import BannerInformation from '../components/banners/BannerInformation';
import { ProductsList } from '../components/product/ProductsList';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import { useGetProductsQuery } from '@/api/products/productsApi';
import ShopCollection from '@/components/shopeCollection/ShopCollection';

export default function HomePage() {
  const { data: dataProducts, isLoading } = useGetProductsQuery({});
  const { data: dataRandomProducts } = useGetProductsQuery({
    random: true,
  });

  return (
    <main>
      <BannerShopping />
      <div className="px-8">
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
      </div>
      <BannerJoinNewsletter />
    </main>
  );
}
