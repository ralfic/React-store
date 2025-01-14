import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FlyoutCart from './components/cart/FlyoutCart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { useLazyGetUserQuery } from './api/user/userApi';
import { useAppDispatch, useAppSelector } from './store';
import { clearAuth } from './store/slices/auth/auth.slice';

export default function App() {
  const { id } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  const [getUser] = useLazyGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function updateToken() {
      try {
        await getUser().unwrap();
      } catch (error: any) {
        console.error('Error updating token:', error);  
        dispatch(clearAuth());
      }
    }
    if (id) {
      updateToken();
    }
  }, [id, getUser, dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <>
      <FlyoutCart />
      <div className="px-8">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
