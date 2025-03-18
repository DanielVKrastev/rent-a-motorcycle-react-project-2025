import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/requests";

export default function useAuth() {
    const authData = useContext(UserContext);

    const requestWrapper = (method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers
            }
        };

        return request.baseRequest(method, url, data, authData.accessToken ? authOptions : options);
    };

    return {
        ...authData,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            patch: requestWrapper.bind(null, 'PATCH'),
            delete: requestWrapper.bind(null, 'DELETE'),
        }
    }
};
