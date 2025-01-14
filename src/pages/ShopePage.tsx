import BannerShopePage from '@/components/banners/BannerShopePage';
import { useGetProductsByFiltersQuery } from '../api/products/productsApi';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import FilterBar from '../components/filter-bar/FilterBar';
import ProductsListByFilters from '../components/product/ProductsListByFilters';
import { useAppSelector } from '../store';

export default function ShopePage() {
  const filters = useAppSelector((state) => state.products.filters);

  const { isLoading } = useGetProductsByFiltersQuery({ ...filters });

  return (
    <main>
      <BannerShopePage />
      <div className="px-8">
        <div className="max-w-wrapper mx-auto w-full flex gap-6 pt-14 pb-24 max-md:flex-col">
          <FilterBar />
          <ProductsListByFilters isLoading={isLoading} />
        </div>
      </div>
      <BannerJoinNewsletter />
    </main>
  );
}
