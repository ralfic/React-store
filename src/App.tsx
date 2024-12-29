import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useEffect } from 'react';
import { FlyoutCart } from './components/cart/FlyoutCart';
import { useLazyGetUserQuery } from './api/user/userApi';
import { useAppDispatch, useAppSelector } from './store';
import { setUser } from './store/slices/user/userSlice';
import { clearAuth } from './store/slices/auth/authSlice';

export default function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { id, token } = useAppSelector((state) => state.auth);
  const [trigger, { data, error }] = useLazyGetUserQuery();

  // const autht = JSON.parse(localStorage.getItem("persist:auth"))

  useEffect(() => {
    if (id && token) {
      trigger({ id, token });
    }
  }, [id, token]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (error) {
      dispatch(clearAuth());
    }
  }, [data, error]);

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
