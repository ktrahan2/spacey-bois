import {buildRetryableBaseQuery, createEndpoints} from '@root/lib/spaceyBoisAPI/utils'
import {API_CACHE_LIFETIME, API_CACHE_TAGS} from './constants';
import {CustomCreateApiOptions} from './types';

/**
 * Configuration for the Interplay RTK Query API instance.
 * Sets up the base configuration for all API endpoints including caching behavior,
 * base URL, and endpoint definitions.
 *
 * @remarks
 * - Configures global cache lifetime for unused data
 * - Sets up cache invalidation tags for all endpoints
 *
 * @example
 * // Used when creating the API
 * export const interplayAPI = createApi(apiConfig);
 *
 * @see {@link CustomCreateApiOptions} for type definition
 * @see {@link INTERPLAY_API_CACHE_TAGS} for available cache tags
 * @see {@link createEndpoints} for endpoint definitions
 */
export const apiConfig: CustomCreateApiOptions = {
    baseQuery: buildRetryableBaseQuery(),
    endpoints: createEndpoints,
    keepUnusedDataFor: API_CACHE_LIFETIME.DEFAULT,
    reducerPath: 'api',
    tagTypes: Object.values(API_CACHE_TAGS),
};
