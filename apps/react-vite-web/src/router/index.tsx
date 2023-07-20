import { webRoutes } from '@core/routes';
import { PageNotFound } from '@core/ui/components/pageNotFound';
import { RootLayout } from '@core/ui/components/rootLayout';
import ErrorBoundary from '@pages/errorBoundary';
import Home from '@pages/home';
import LoginPage from '@pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PrivateRouter } from './privateRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRouter>
        <RootLayout />
      </PrivateRouter>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: webRoutes.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
