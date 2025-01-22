import { User } from "@root/types";
import {faker} from '@faker-js/faker';
import { createModel } from "./createModel";

const createNewUser = (extraUserData: Partial<User>) => {
    return {
        id: faker.string.uuid(),
        ...extraUserData,
    }
}

export const createUserFactory = (extraUserData: Partial<User> = {}) => {
    const initialiUser = createNewUser(extraUserData);

    return createModel(initialiUser)
}