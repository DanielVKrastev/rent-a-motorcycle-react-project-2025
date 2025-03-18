import requests from "../utils/requests";

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