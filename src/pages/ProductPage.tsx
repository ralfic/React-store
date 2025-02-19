import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from '@/api/products/productsApi';
import BannerJoinNewsletter from '@/components/banners/BannerJoinNewsletter';
import { ProductsList } from '@/components/product/ProductsList';
import { useParams } from 'react-router-dom';
import ProductPageBreadCrumb from '@/components/product/ProductPageBreadCrumb';
import ProductSkeleton from '@/components/uikit/ProductSkeleton';
import Product from '@/components/product/Product';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const { data: products } = useGetProductsQuery({ random: true });

  return (
    <main>
      <div className="px-8">
        <div className="max-w-wrapper mx-auto w-full">
          <ProductPageBreadCrumb />
          {isLoading && <ProductSkeleton />}
          {!isLoading && data && <Product product={data.product} />}
          <ProductsList
            products={products?.products}
            typeArrangement="row"
            title="You might also like"
            isLoading={isLoading}
          />
        </div>
      </div>
      <BannerJoinNewsletter />
    </main>
  );
}
