import {AUTH_ROUTES} from "@root/app/routes/auth/routes";
import {MAIN_HALL_ROUTES} from "@root/app/routes/mainhall/routes";

export const ROUTES = {
  AUTH: AUTH_ROUTES,
  MAIN_HALL: MAIN_HALL_ROUTES,
} as const;
