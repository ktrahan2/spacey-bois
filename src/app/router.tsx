import {createBrowserRouter, Navigate, RouterProvider} from 'react-router';
import {Login} from './routes/auth/login';
import {ROUTES} from '@root/types/constants';
import {MainErrorFallback} from '@root/components/errors/MainErrorFallback';

export const createAppRouter = () =>
  createBrowserRouter(
    [
      {
        path: '/',
        errorElement: <MainErrorFallback />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
          },
          {
            path: ROUTES.AUTH.LOGIN,
            lazy: async () => ({Component: Login}),
          },
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
