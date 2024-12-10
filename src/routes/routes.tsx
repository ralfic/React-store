import App from '../App';
import HomePage from '../pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';

export const routesList = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shope', element: <div>shope</div> },
      { path: '/product', element: <div>product</div> },
    ],
  },
]);
