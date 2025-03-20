import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3000/motorcycle';

export const useMotorcycles = () => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const refetch = () => {
        setIsLoading(true);
        request.get(`${baseUrl}`)
            .then(result => {
                setMotorcycles(result);
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
        motorcycles,
        isLoading,
        refetch
    };
};

export const useMotorcycle = (motorcycleId) => {
    const [motorcycle, setMotorcycle] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        request.get(`${baseUrl}/${motorcycleId}`)
            .then(result => { 
                setMotorcycle(result);
                setIsLoading(false);
            });
    }, [motorcycleId])

    return {
        motorcycle,
        isLoading
    };
};

export const useCreateMotorcycle = () => {
    const createMotorcycle = (motorcycleData) =>
        request.post(`${baseUrl}/`, {reservationCount: 0, ...motorcycleData});

    return {
        createMotorcycle,
    }
};

export const useEditMotorcycle = () => {
    const { request } = useAuth();

    const edit = (motorcycleId, motorcycleData) =>
        request.patch(`${baseUrl}/${motorcycleId}`, { ...motorcycleData });

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

