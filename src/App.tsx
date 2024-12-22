import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { FlyoutCart } from './components/FlyoutCart';
import { useGetUserQuery } from './api/user/userApi';
import { useAppDispatch, useAppSelector } from './store';
import { setUser } from './store/slices/user/userSlice';
import { clearAuth } from './store/slices/auth/authSlice';

export default function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { user, token } = useAppSelector((state) => state.auth);
  const { data, error } = useGetUserQuery({
    id: user?.id,
    token: token,
  });

  if (data) {
    dispatch(setUser(data));
  } else if (error) {
    dispatch(clearAuth());
  }

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
