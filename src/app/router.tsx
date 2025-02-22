import {createBrowserRouter, Navigate, RouterProvider} from 'react-router';
import {ROUTES} from '@root/types/constants';
import {authRoutes} from './routes/auth/routes';
import {mainHallRoutes} from './routes/mainhall/routes';
import {MainLayout} from '@root/components/layouts/MainLayout';
import {NotFound} from './routes/NotFound';

export const createAppRouter = () =>
  createBrowserRouter(
    [
      {
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.AUTH.LOGIN.getHref()} replace />,
          },
          ...authRoutes,
          ...mainHallRoutes,
        ],
        Component: MainLayout,
        errorElement: <NotFound />,
        HydrateFallback: NotFound,
        path: '/',
      },
    ],
    {
      future: {
        v7_partialHydration: true,
      },
    },
  );

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
