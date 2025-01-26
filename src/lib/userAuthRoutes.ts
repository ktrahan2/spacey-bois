import {EndpointBuilder} from '@reduxjs/toolkit/query/react';
import {AuthCredentials, User} from '@root/types';

export const userAuthRoutes = (builder: EndpointBuilder<any, any, any>) => ({
  login: builder.mutation<User, AuthCredentials>({
    query: (authCredentials: AuthCredentials) => ({
      url: '/auth/login',
      method: 'POST',
      body: authCredentials,
    }),
  }),
});