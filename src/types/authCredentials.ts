export type AuthCredentials = {
    password: string;
    username: string;
}

export type AuthRegisterCredentials = AuthCredentials & {
    firstName: string;
    lastName: string;
}