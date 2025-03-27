import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3000/comments';

export const useComments = (motorcycleId = null) => {
    const [comments, setComments] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

     useEffect(() => {
        let url = baseUrl;
        if(motorcycleId){
            url = `${baseUrl}?motorcycleId=${motorcycleId}`;
        }
        setIsLoading(true);
        request.get(url)
            .then(result => {
                setComments(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
     }, [motorcycleId]);

    return {
        comments,
        isLoading,
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

