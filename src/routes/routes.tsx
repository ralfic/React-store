import App from '../App';
import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import ShopePage from '../pages/ShopePage';
import ProductPage from '@/pages/ProductPage';
import SignUpForm from '@/components/SignUpForm';
import SignInForm from '@/components/SignInForm';
import AuthLayout from '@/layouts/AuthLayout';
import AccountPage from '@/pages/AccountPage';
import AccountDetails from '@/components/account/AccountDetails';
import AccountOrders from '@/components/account/AccountOrders';
import AccountWishlist from '@/components/account/AccountWishlist';
import CartPage from '@/pages/CartPage';
import ErrorPage from '@/pages/ErrorPage';

export const rootRoute = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shope', element: <ShopePage /> },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
        children: [
          { path: '/account', element: <AccountDetails /> },
          { path: '/account/orders', element: <AccountOrders /> },
          { path: '/account/wishlist', element: <AccountWishlist /> },
        ],
      },
      { path: '/cart', element: <CartPage /> },
    ],
  },
]);

export const authRoute = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shope', element: <ShopePage /> },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/signup', element: <SignUpForm /> },
      { path: '/signin', element: <SignInForm /> },
    ],
  },
]);
