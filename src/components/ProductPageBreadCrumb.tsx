import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

export default function ProductPageBreadCrumb() {
  return (
    <div className="py-4">
      <BreadcrumbRoot colorPalette={'white'} size={'lg'}>
        <BreadcrumbLink asChild colorPalette={'white'}>
          <Link to={'/'}>Home</Link>
        </BreadcrumbLink>
        <BreadcrumbLink asChild colorPalette={'white'}>
          <Link to={'/shope'}>Shope</Link>
        </BreadcrumbLink>
        <BreadcrumbCurrentLink>Product</BreadcrumbCurrentLink>
      </BreadcrumbRoot>
    </div>
  );
}
