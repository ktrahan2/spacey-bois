export const AUTH_ROUTES = {
  LOGIN: {
    getHref: () => '/login',
    path: '/login',
  },
  REGISTER: {
    getHref: () => '/register',
    path: '/register',
  },
} as const;

export const authRoutes = [
  {
    path: AUTH_ROUTES.LOGIN.path,
    lazy: async () => ({Component: (await import('./login')).Login}),
  },
];
