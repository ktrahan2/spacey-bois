import {EndpointBuilder} from '@reduxjs/toolkit/query/react';
import {AuthCredentials, AuthRegisterCredentials, User} from '@root/types';
import { API_ENDPOINTS } from './constants';

export const userAuthRoutes = (builder: EndpointBuilder<any, any, any>) => ({
  login: builder.mutation<User, AuthCredentials>({
    query: (authCredentials: AuthCredentials) => ({
      url: API_ENDPOINTS.LOGIN,
      method: 'POST',
      body: authCredentials,
    }),
  }),
  register: builder.mutation<User, AuthCredentials>({
    query: (registerCredentials: AuthRegisterCredentials) => ({
      url: API_ENDPOINTS.REGISTER,
      method: 'POST',
      body: registerCredentials,
    }),
  })
});