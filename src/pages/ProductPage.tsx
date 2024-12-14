import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from '@/api/productApi';
import BannerJoinNewsletter from '@/components/banners/BannerJoinNewsletter';
import { ProductsList } from '@/components/ProductsList';
import { useParams } from 'react-router-dom';
import ProductPageBreadCrumb from '@/components/ProductPageBreadCrumb';
import ProductSkeleton from '@/components/uikit/ProductSkeleton';
import Product from '@/components/Product';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const { data: products } = useGetProductsQuery({ random: true });

  return (
    <main>
      <div className="max-w-wrapper mx-auto w-full">
        <ProductPageBreadCrumb />
        {isLoading && <ProductSkeleton />}
        {!isLoading && <Product product={data?.product} />}
        <ProductsList
          products={products?.products}
          typeArrangement="row"
          title="You might also like"
          isLoading={isLoading}
        />
      </div>
      <BannerJoinNewsletter />
    </main>
  );
}
