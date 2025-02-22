import {User} from "./models/user"

export type AuthResponse = {
    user: User;
    token: string;
}