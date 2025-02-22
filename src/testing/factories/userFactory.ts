import {User} from '@root/types';
import {faker} from '@faker-js/faker';
import {createModel} from './createModel';

const createNewUser = (extraUserData: Partial<User>): User => {
  return {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
    ...extraUserData,
  };
};

export const createUserFactory = (extraUserData: Partial<User> = {}) => {
  const initialUser = createNewUser(extraUserData);

  return createModel(initialUser);
};