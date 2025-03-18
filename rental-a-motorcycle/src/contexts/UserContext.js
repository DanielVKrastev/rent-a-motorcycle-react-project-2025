import { createContext, useContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export const useUserContext = () => {
    return useContext(UserContext);
};