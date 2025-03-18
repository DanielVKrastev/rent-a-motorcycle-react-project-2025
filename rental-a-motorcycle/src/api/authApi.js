import { useContext, useEffect } from "react";
import requests from "../utils/requests";
import { UserContext } from "../contexts/UserContext";
import { clearUserData } from "../utils/userUtils";

const baseUrl = 'http://localhost:3000/auth';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) =>
        requests.post(
            `${baseUrl}/login`,
            { email, password },
            // { signal: abortRef.current.signal }
        );

    // useEffect(() => {
    //     const abortController = abortRef.current;

    //     return () => abortController.abort();
    // }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const register = (email, username, password, rePassword) =>
        requests.post(`${baseUrl}/register`, { email, username, password, rePassword });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        requests.post(`${baseUrl}/logout`, null, options)
            .then(() => {
                userLogoutHandler();
                clearUserData();
            });

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};