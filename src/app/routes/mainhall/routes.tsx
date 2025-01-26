export const MAIN_HALL_ROUTES = {
  ROOT: {
    getHref: () => '/main_hall',
    path: 'main_hall',
  },
  STORIES: {
    ROOT: {
      getHref: () => '/main_hall/stories',
      path: 'main_hall/stories',
    },
    NEW: {
      getHref: () => '/main_hall/stories/new',
      path: 'new',
    },
    CONTINUE: {
      getHref: () => '/main_hall/stories/continue',
      path: 'continue',
    },
    getCharacterStoryPath: {
      getHref: (characterId: string) =>
        `/main_hall/stories/continue/${characterId}`,
      path: 'continue/:characterId',
    },
  },
};

export const mainHallRoutes = [
  {
    path: MAIN_HALL_ROUTES.ROOT.path,
    lazy: async () => ({Component: (await import('./MainHall')).MainHall}),
  },
];
