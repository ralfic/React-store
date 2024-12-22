import App from '../App';
import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import ShopePage from '../pages/ShopePage';
import ProductPage from '@/pages/ProductPage';
import SignUpForm from '@/components/SignUpForm';
import SignInForm from '@/components/SignInForm';
import AuthLayout from '@/layouts/AuthLayout';
import UserPage from '@/pages/UserPage';

export const rootRoute = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shope', element: <ShopePage /> },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      { path: '/user', element: <UserPage /> },
    ],
  },
]);

export const authRoute = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Error</div>,
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
    errorElement: <div>Error</div>,
    children: [
      { path: '/signup', element: <SignUpForm /> },
      { path: '/signin', element: <SignInForm /> },
    ],
  },
]);
