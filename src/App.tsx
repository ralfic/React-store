import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { FlyoutCart } from './components/FlyoutCart';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return (
    <div>
      <FlyoutCart />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
