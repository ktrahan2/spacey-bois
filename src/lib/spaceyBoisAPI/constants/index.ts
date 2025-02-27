/**
 * This tells the cache how long it should hold onto unused data
 * Time is in seconds
 * default time is the default used in RTK Query
 */
export const API_CACHE_LIFETIME = {
    DEFAULT: 60,
} as const;

/**
 * Cache tag constants for the Interplay API.
 * These tags are used to control cache invalidation in RTK Query.
 *
 * @example
 * // Using in endpoint definition
 * invalidatesTags: [API_CACHE_TAGS.USER]
 *
 * // Using in providesTags
 * providesTags: (result, error) => [
 *   {type: API_CACHE_TAGS.USER}
 * ]
 */
export const API_CACHE_TAGS = {
    USER: 'User',
} as const;

/**
 * API endpoint paths for the API.
 * Contains route definitions and path builders for all endpoints.
 *
 * @remarks
 * - Path builders (functions) are used for endpoints that require URL parameters
 * - All paths are relative to the API base URL
 *
 * @example
 * // Using a static path
 * url: API_ENDPOINTS.AUTH.REGISTER
 *
 * // Using a path builder
 * url: API_ENDPOINTS.GROUP.MEMBERS('123')
 */
export const API_ENDPOINTS = {
    AUTH: {
        ROOT: '/auth',
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
    }
} as const;

/**
 * Type representing all possible cache tag values in the Interplay API.
 * This type is used in RTK Query configuration and endpoint definitions.
 *
 * @type {string}
 */
export type APICacheTags = typeof API_CACHE_TAGS[keyof typeof API_CACHE_TAGS];
