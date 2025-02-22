import {EndpointBuilder} from '@reduxjs/toolkit/query/react';
import {AuthCredentials, User} from '@root/types';
import { API_ENDPOINTS } from './constants';

export const userAuthRoutes = (builder: EndpointBuilder<any, any, any>) => ({
  login: builder.mutation<User, AuthCredentials>({
    query: (authCredentials: AuthCredentials) => ({
      url: API_ENDPOINTS.LOGIN,
      method: 'POST',
      body: authCredentials,
    }),
  }),
});