import PageNavigation from '../PageNavigation';
import Logo from '../uikit/Logo';
import HeaderFeature from './HeaderFeature';

export default function Header() {
  return (
    <header className="grid grid-cols-3 py-[18px] max-w-wrapper w-full mx-auto">
      <Logo />
      <PageNavigation />
      <HeaderFeature />
    </header>
  );
}
