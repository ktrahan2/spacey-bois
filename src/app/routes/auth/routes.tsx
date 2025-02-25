export const AUTH_ROUTES = {
  LOGIN: {
    getHref: () => '/auth/login',
    path: 'login',
  },
  REGISTER: {
    getHref: () => '/auth/register',
    path: 'register',
  },
  ROOT: {
    getHref: () => '/auth',
    path: 'auth',
  },
} as const;

export const authRoutes = [
  {
    path: AUTH_ROUTES.LOGIN.getHref(),
    lazy: async () => ({Component: (await import('./Login')).Login}),
  },
  {
    path: AUTH_ROUTES.REGISTER.getHref(),
    lazy: async () => ({Component: (await import('./Register')).Register}),
  },
];
