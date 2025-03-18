import { useContext, useEffect, useState } from "react";
import request from "../utils/requests";
import { UserContext } from "../contexts/UserContext";
import { clearUserData } from "../utils/userUtils";

const baseUrl = 'http://localhost:3000/auth';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) =>
        request.post(
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
        request.post(`${baseUrl}/register`, { email, username, password, rePassword });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    console.log(accessToken);
    

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.post(`${baseUrl}/logout`, null, options)
            .then(() => {
                userLogoutHandler();
                clearUserData();
            })
            .catch(err => console.log(err.message)
            );

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};

export const useUserRole = () => {
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    const { accessToken } = useContext(UserContext);

    const isAuth = !!accessToken; 

    async function fetchUserData() {
        try {
            const response = await fetch('http://localhost:3000/auth/me', {
                method: 'GET',
                headers: {
                    'X-Authorization': localStorage.getItem('accessToken'),
                },
            });

            if (response.ok) {
                const user = await response.json();
                setUserRole(user.role); 
            } else {
                setUserRole(null); 
            }
        } catch (error) {
            console.error('Error fetching user role:', error);
            setUserRole(null); 
        } finally {
            setIsLoading(false); 
        }
    }

    useEffect(() => {
        if (isAuth) {
            fetchUserData();
        } else {
            setIsLoading(false);
        }
    }, [isAuth]);

    return { userRole, isLoading };
};