import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3000/comments';

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

export const useCreateComment = () => {
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const createComment = (commentData) =>
        request.post(`${baseUrl}/`, commentData, options);

    return {
        createComment,
    }
};

export const useEditComment = () => {
    const { request } = useAuth();
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const edit = (commentId, commentData) =>
        request.patch(`${baseUrl}/${commentId}`, { ...commentData }, options);

    return {
        edit,
    }
};

export const useDeleteUser = () => {
    const { request } = useAuth();
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const deleteUser = (userId) =>
        request.delete(`${baseUrl}/${userId}`, null, options);

    return {
        deleteUser,
    }
};

