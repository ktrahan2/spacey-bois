import {createBrowserRouter, Navigate, RouterProvider} from 'react-router';
import {ROUTES} from '@root/types/constants';
import {MainErrorFallback} from '@root/components/errors/MainErrorFallback';
import {authRoutes} from './routes/auth/routes';
import {mainHallRoutes} from './routes/mainhall/routes';

export const createAppRouter = () =>
  createBrowserRouter(
    [
      {
        path: '/',
        errorElement: <MainErrorFallback />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.AUTH.LOGIN.getHref()} replace />,
          },
          ...authRoutes,
          ...mainHallRoutes,
        ],
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
