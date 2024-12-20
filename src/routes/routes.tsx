import App from '../App';
import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import ShopePage from '../pages/ShopePage';
import ProductPage from '@/pages/ProductPage';

export const routesList = createBrowserRouter([
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
]);
