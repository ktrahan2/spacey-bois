import {userAuthRoutes} from "@lib/spaceyBoisAPI/endpoints/userAuthRoutes";
import {CustomEndpointBuilder} from "@lib/spaceyBoisAPI/types";

/**
 * Creates the RTK Query endpoints
 * @param builder - The endpoint builder instance from RTK Query
 * @returns An object containing all API endpoints where each key is an endpoint name
 * @todo add POC endpoint
 */
export const createEndpoints = (builder: CustomEndpointBuilder) => ({
    ...userAuthRoutes(builder)
});
