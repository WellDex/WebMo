import { createContext } from 'react';

const noop = () => { };

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop(),
    logout: null,
    email: null,
    isAuth: false,
});