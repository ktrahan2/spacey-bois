import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";
import {ROUTES} from "@root/types/constants";

export default [
  route(ROUTES.AUTH.LOGIN, 'routes/login.tsx')
] satisfies RouteConfig;