import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3000/reservations';

export const useReservations = (userId = false) => {
    const [reservations, setReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const refetch = () => {
        setIsLoading(true);
        if(!userId){
            request.get(`${baseUrl}`)
            .then(result => {
                setReservations(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
        }else{
            request.get(`${baseUrl}?userId=${userId}`)
            .then(result => {
                setReservations(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
        }

    };

    useEffect(() => {
        refetch();
    }, []);

    return {
        reservations,
        isLoading,
        refetch
    };
};

export const useReservationsLimit = (limit) => {
    const [reservations, setReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const refetch = () => {
        setIsLoading(true);
        request.get(`${baseUrl}?limit=${limit}`)
            .then(result => {
                setReservations(result);
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
        reservations,
        isLoading,
        refetch
    };
};

export const useReservation = (reservationId) => {
    const [reservation, setReservation] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        request.get(`${baseUrl}/${reservationId}`)
            .then(result => { 
                setReservation(result);
                setIsLoading(false);
            });
    }, [reservationId])

    return {
        reservation,
        isLoading
    };
};

export const useCreateReservation = () => {
    const createReservation = (reservationData) =>
        request.post(`${baseUrl}/`, reservationData);

    return {
        createReservation,
    }
};

export const useEditReservation = () => {
    const { request } = useAuth();

    const edit = (reservationId, reservationData) =>
        request.patch(`${baseUrl}/${reservationId}`, reservationData );

    return {
        edit,
    }
};

export const useDeleteReservation = () => {
    const { request } = useAuth();
    const deleteReservation = (reservationId) =>
        request.delete(`${baseUrl}/${reservationId}`);

    return {
        deleteReservation,
    }
};

export const useRevenue = () => {
    const [revenue, setRevenue] = useState(0);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        request.get(`${baseUrl}/revenue`)
            .then(result => { 
                setRevenue(result);
                setIsLoading(false);
            });
    }, [])

    return {
        revenue,
        isLoading
    };
};

