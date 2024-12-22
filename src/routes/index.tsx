import { RouterProvider } from 'react-router-dom';
import { rootRoute, authRoute } from './routes';
import { useAppSelector } from '@/store';

export function MyAppRouter() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return <RouterProvider router={isAuthenticated ? rootRoute : authRoute} />;
}
