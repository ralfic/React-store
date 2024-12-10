import { RouterProvider } from 'react-router-dom';
import { routesList } from './routes';

export function MyAppRouter() {
  return <RouterProvider router={routesList} />;
}
