import PageNavigation from '../PageNavigation';
import Logo from '../uikit/Logo';
import BurgerMenu from './BurgerMenu';
import HeaderFeature from './HeaderFeature';

export default function Header() {
  return (
    <header className="grid grid-cols-3 py-[18px] max-w-wrapper w-full mx-auto max-sm:flex max-sm:item-center">
      <div className='pr-2 hidden max-sm:block'>
        <BurgerMenu />
      </div>
      <Logo />
      <PageNavigation />
      <HeaderFeature />
    </header>
  );
}
