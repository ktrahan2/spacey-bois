/**
 * Types for the Interplay RTK Query API.
 * Defines the core type system for the API including base query, endpoints, and configuration.
 */

import {BaseQueryFn, CreateApiOptions, EndpointBuilder, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {createEndpoints} from './utils';
import {APICacheTags} from './constants';

/**
 * Inferred type of all API endpoints from the createEndpoints implementation.
 * Automatically updates when new endpoints are added.
 */
type InferredEndpoints = ReturnType<typeof createEndpoints>;

/**
 * Base query type for handling HTTP requests.
 *
 * @todo Update type when base query function is implemented
 */
export type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;

/**
 * Builder type for creating new endpoints.
 * Used when defining endpoint configurations.
 *
 * @example
 * export const someEndpoint = (builder: InterplayEndpointBuilder) => ({
 *   queryName: builder.query<ResponseType, ArgsType>({ ... })
 * });
 */
export type CustomEndpointBuilder = EndpointBuilder<BaseQuery, APICacheTags, 'api'>;

/**
 * Configuration options type for creating the RTK Query API instance.
 * Combines all type definitions into the final API configuration type.
 *
 * @see {@link apiConfig} for implementation
 */
export type CustomCreateApiOptions = CreateApiOptions<
    BaseQuery,
    InferredEndpoints,
    'api',
    APICacheTags
>;
