import { useGetProductsQuery } from '../api/productApi';
import BannerJoinNewsletter from '../components/banners/BannerJoinNewsletter';
import FilterBar from '../components/FilterBar';
import ProductsListByFilters from '../components/ProductsListByFilters';
import { useAppDispatch, useAppSelector } from '../store';
import { setFilters } from '../store/slices/productsSlice';

export default function ShopePage() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);
  const filters = useAppSelector((state) => state.products.filters);
  const limit = useAppSelector((state) => state.products.filters.limit);

  const { isLoading } = useGetProductsQuery({ ...filters });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div className="max-w-wrapper mx-auto w-full">
        <div className="flex gap-6 pt-14 pb-24">
          <FilterBar
            selectCategory={filters?.category}
            setSelectCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
          <ProductsListByFilters
            products={products}
            currentCategory={filters?.category}
            increaseLimitProducts={() =>
              dispatch(setFilters({ key: 'limit', value: limit * 2 }))
            }
          />
        </div>
      </div>
      <BannerJoinNewsletter />
    </>
  );
}
