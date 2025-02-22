import {API_ENDPOINTS} from '@lib/constants';
import {createUserFactory} from '@root/testing/factories';
import {AuthResponse} from '@root/types';
import {delay, http, HttpResponse} from 'msw';

const mockedUserData = createUserFactory();

export const handlers = [
  http.post(API_ENDPOINTS.LOGIN, async ({request}) => {
    await delay(500);

    (await request.json()) as AuthResponse;

    const mockedAuthResponse = {
      user: mockedUserData.getModel(),
      token: 'mocked-token',
    }

    return HttpResponse.json(mockedAuthResponse);
  }),
];
