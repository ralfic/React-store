import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

export default function BannerShopePage() {
  return (
    <article className="font-Poppins py-36 w-full bg-banner-fon-shope ">
      <div className="max-w-[413px] mx-auto flex flex-col gap-6 items-center justify-center">
        <BreadcrumbRoot colorPalette={'white'} size={'lg'}>
          <BreadcrumbLink asChild colorPalette={'white'}>
            <Link to={'/'}>Home</Link>
          </BreadcrumbLink>
          <BreadcrumbCurrentLink>Shope</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
        <h1 className="font-medium text-6xl ">Shop Page</h1>
        <p className="text-lg">Let’s design the place you always imagined.</p>
      </div>
    </article>
  );
}
