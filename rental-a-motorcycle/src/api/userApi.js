import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3000/users';

export const useUsers = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

    const refetch = () => {
        setIsLoading(true);
        request.get(`${baseUrl}`)
            .then(result => {
                setUsers(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    };

    useEffect(() => {
        refetch();
    }, []);

    return {
        users,
        isLoading,
        refetch
    };
};

export const useUser = (userId) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        request.get(`${baseUrl}/${userId}`)
            .then(result => { 
                setUser(result);
                setIsLoading(false);
            });
    }, [userId])

    return {
        user,
        isLoading
    };
};

export const useEditUser = () => {
    const { request } = useAuth();
    const { accessToken, _id } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const edit = (userId, userData) =>
        request.patch(`${baseUrl}/${userId}`, { ...userData }, options);

    return {
        edit,
    }
};
