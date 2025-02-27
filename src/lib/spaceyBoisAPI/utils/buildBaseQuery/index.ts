import { BaseQuery } from '@lib/spaceyBoisAPI/types';
import {fetchBaseQuery, FetchBaseQueryError, retry} from '@reduxjs/toolkit/query/react';

/**
 * Creates a retry-enabled base query function
 * @returns A function that will automatically retry failed requests based on configured conditions
 */
export const buildRetryableBaseQuery = () => retry(buildBaseQuery, {retryCondition: shouldRetryRequest});

/**
 * Builds a dynamic base query that handles API configuration and authorization
 * @param args - The RTK Query arguments (endpoint URL and request options)
 * @param api - The RTK Query API instance containing getState and extra options
 * @param extraOptions - Additional query options including tokenRequired flag
 * @returns A promise resolving to the query result or error response
 * @throws Error if API configuration validation fails
 */
export const buildBaseQuery: BaseQuery = async (args, api, extraOptions) => {
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:5173',
        prepareHeaders,
    });

    return rawBaseQuery(args, api, extraOptions);
};

/**
 * Prepares request headers by adding default headers
 * @param headers - The Headers object to modify
 * @param authToken - The current authentication token
 * @param userLanguage - The user's selected language preference
 * @returns The modified Headers object
 * @remarks This can be updated to accept custom headers whenever we create an endpoint that needs it
 */
export const prepareHeaders = (headers: Headers) => {
    const defaultHeaders = getDefaultHeaders();

    Object.entries(defaultHeaders).forEach(([key, value]) => {
        headers.set(key, value);
    });

    return headers;
};

/**
 * Returns the default headers for API requests
 * @returns An object containing default header key-value pairs
 */
export const getDefaultHeaders = (): Record<string, string> => ({
    'Content-Type': 'application/json',
});

/** Status codes that should trigger a retry attempt */
const RETRYABLE_STATUS_CODES = [429, 500, 503, 504];

/** Maximum number of retry attempts for failed requests */
const MAX_RETRIES = 3;

/**
 * Determines whether a failed request should be retried
 * @param error - The error that occurred during the request
 * @param _ - Unused parameter (maintained for compatibility)
 * @param attempt - Current attempt number
 * @returns Boolean indicating whether to retry the request
 * @todo Determine how we want to handle other error strings from FetchBaseQueryError
 */
export const shouldRetryRequest = (error: unknown, _: unknown, {attempt}: {attempt: number}) => {
    const fetchError = error as FetchBaseQueryError;

    const hasRetriesLeft = attempt < MAX_RETRIES;
    const statusCode = typeof fetchError.status === 'number' ? fetchError.status : null;
    const isRetryableStatusCode = statusCode !== null && RETRYABLE_STATUS_CODES.includes(statusCode);

    const shouldRetry = hasRetriesLeft && isRetryableStatusCode;

    return shouldRetry;
};
