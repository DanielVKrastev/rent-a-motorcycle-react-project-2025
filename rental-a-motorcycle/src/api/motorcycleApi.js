import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";
import { BASEURL } from "../constants";

const baseUrl = `${BASEURL}/motorcycle`;

export const useMotorcycles = (filter = undefined) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        const url = filter? `${baseUrl}?where=brand=${filter}` : `${baseUrl}`;
        request.get(url)
            .then(result => {
                setMotorcycles(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }, [filter]);

    return {
        motorcycles,
        isLoading,
    };
};

export const useActiveMotorcycles = (filter = undefined) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        const url = filter? `${baseUrl}?where=brand=${filter}&active=yes` : `${baseUrl}?active=yes`;
        request.get(url)
            .then(result => {
                setMotorcycles(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }, [filter]);

    return {
        motorcycles,
        isLoading,
    };
};

export const useMostRentedMotorcyclesLimit = (limit) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        request.get(`${baseUrl}?limit=${limit}`)
            .then(result => {
                setMotorcycles(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }, [limit])

    return {
        motorcycles,
        isLoading,
    };
};

export const useSearchMotorcycle = (searchQuery) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        request.get(`${baseUrl}/search/${searchQuery}`)
            .then(result => {
                setMotorcycles(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }, [searchQuery])

    return {
        motorcycles,
        isLoading,
    };
};


export const useMotorcycle = (motorcycleId) => {
    const [motorcycle, setMotorcycle] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    
    useEffect(() => {
        if(motorcycleId === undefined) {
            setMotorcycle({});
            setIsLoading(false);
            return;
        }

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
        request.post(`${baseUrl}/`, motorcycleData);

    return {
        createMotorcycle,
    }
};

export const useEditMotorcycle = () => {
    const { request } = useAuth();

    const edit = (motorcycleId, motorcycleData) =>
        request.patch(`${baseUrl}/${motorcycleId}`, motorcycleData );
    return {
        edit,
    }
};

export const useDeleteMotorcycle = () => {
    const { request } = useAuth();
    const deleteMotorcycle = (motorcycleId) =>
        request.delete(`${baseUrl}/${motorcycleId}`);

    return {
        deleteMotorcycle,
    }
};

