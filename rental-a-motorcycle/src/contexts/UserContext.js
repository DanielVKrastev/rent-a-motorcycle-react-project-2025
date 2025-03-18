import { createContext, useContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    role: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export const useUserContext = () => {
    return useContext(UserContext);
};