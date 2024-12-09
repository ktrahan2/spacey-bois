import {delay, http, HttpResponse} from 'msw';
import {mockedUserData} from '../routes/userProfile/mockData';

export const handlers = [
  http.post('/auth', async ({request}) => {
    await delay(500); // Optional: adds realistic delay

    const body = (await request.json()) as {userName: string};

    // Error case
    if (body?.userName === 'error') {
      return new HttpResponse(
        JSON.stringify({message: 'Authentication failed'}),
        {status: 401}
      );
    }

    // Success case
    return HttpResponse.json(mockedUserData);
  }),
];
