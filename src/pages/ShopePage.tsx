import BannerShopePage from '@/components/banners/BannerShopePage';
import { useGetProductsByFiltersQuery } from '../api/productApi';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import FilterBar from '../components/filter-bar/FilterBar';
import ProductsListByFilters from '../components/ProductsListByFilters';
import { useAppDispatch, useAppSelector } from '../store';
import { setFilters } from '../store/slices/productsSlice';

export default function ShopePage() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);
  const filters = useAppSelector((state) => state.products.filters);
  const limit = useAppSelector((state) => state.products.filters.limit);

  const { isLoading } = useGetProductsByFiltersQuery({ ...filters });

  return (
    <main>
      <div className="max-w-wrapper mx-auto w-full">
        <BannerShopePage />
        <div className="flex gap-6 pt-14 pb-24">
          <FilterBar
            selectCategory={filters?.category}
            setSelectCategory={(category) => {
              dispatch(setFilters({ key: 'category', value: category }));
              dispatch(setFilters({ key: 'limit', value: 9 }));
            }}
            setSelectSort={(value) =>
              dispatch(setFilters({ key: 'sort', value: value }))
            }
          />
          <ProductsListByFilters
            products={products}
            currentCategory={filters?.category}
            isLoading={isLoading}
            increaseLimitProducts={() =>
              dispatch(setFilters({ key: 'limit', value: limit * 2 }))
            }
            limit={limit}
          />
        </div>
      </div>
      <BannerJoinNewsletter />
    </main>
  );
}
