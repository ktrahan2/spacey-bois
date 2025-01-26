export const MAIN_HALL_ROUTES = {
  ROOT: {
    getHref: () => '/main_hall',
    path: '/main_hall',
  },
  STORIES_ROUTES: {
    ROOT: {
      getHref: () => '/main_hall/stories',
      path: '/main_hall/stories',
    },
    NEW: {
      getHref: () => '/main_hall/stories/new',
      path: '/main_hall/stories/new',
    },
    CONTINUE: {
      getHref: () => '/main_hall/stories/continue',
      path: '/main_hall/stories/continue',
    },
    getCharacterStoryPath: (characterId: string) => ({
      getHref: () => `/main_hall/stories/continue/${characterId}`,
      path: `/main_hall/stories/continue/${characterId}`,
    }),
  },
};

export const mainHallRoutes = [
  {
    path: MAIN_HALL_ROUTES.ROOT.path,
    lazy: async () => ({Component: (await import('./MainHall')).MainHall}),
  },
];
