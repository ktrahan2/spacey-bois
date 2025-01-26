export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  MAIN_HALL: {
    ROOT: '/main_hall',
    STORIES: {
      ROOT: '/main_hall/stories',
      NEW: '/main_hall/stories/new',
      CONTINUE: '/main_hall/stories/continue',
      getCharacterStoryPath: (characterId: string) =>
        `/main_hall/stories/continue/${characterId}`,
    },
  },
} as const;
