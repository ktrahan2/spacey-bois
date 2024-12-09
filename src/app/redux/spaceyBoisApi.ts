import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '@root/types';

const BASE_URL = 'http://localhost:5173/';

export const spaceyBoisApi = createApi({
  reducerPath: 'spaceyBoisApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    userAuth: builder.mutation<User, {userName: string}>({
      query: (userName) => ({
        url: '/auth',
        method: 'POST',
        body: userName,
      }),
    }),
  }),
});

export const {useUserAuthMutation} = spaceyBoisApi;
