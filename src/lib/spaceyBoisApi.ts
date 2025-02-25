import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {userAuthRoutes} from './userAuthRoutes';

const BASE_URL = 'http://localhost:5173/';

export const spaceyBoisApi = createApi({
  reducerPath: 'spaceyBoisApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    ...userAuthRoutes(builder),
  }),
});

export const {useLoginMutation, useRegisterMutation} = spaceyBoisApi;
