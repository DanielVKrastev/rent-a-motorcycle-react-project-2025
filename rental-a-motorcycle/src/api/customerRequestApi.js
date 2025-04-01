import { useEffect, useState } from "react";
import request from "../utils/requests";
import useAuth from "../hooks/useAuth";
import { BASEURL } from "../constants";

const baseUrl = `${BASEURL}/customer-requests`;

export const useRequests = (userId = null) => {
    const [customerRequests, setCustomerRequests] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

     useEffect(() => {
        let url = baseUrl;
        if(userId){
            url = `${baseUrl}?userId=${userId}`;
        }
        setIsLoading(true);
        request.get(url)
            .then(result => {
                setCustomerRequests(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
     }, [userId]);

    return {
        customerRequests,
        isLoading,
    };
};

export const useRequest = (requestId) => {
    const [customerRequest, setCustomerRequest] = useState({});
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        request.get(`${baseUrl}/${requestId}`)
            .then(result => { 
                setCustomerRequest(result);
                setIsLoading(false);
            });
    }, [requestId])

    return {
        customerRequest,
        isLoading
    };
};

export const useCreateReqeust = () => {
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const createCustomerRequest = (requestData) =>
        request.post(`${baseUrl}/`, requestData, options);

    return {
        createCustomerRequest,
    }
};

export const useEditRequest = () => {
    const { request } = useAuth();
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const edit = (requestId, requestData) =>
        request.patch(`${baseUrl}/${requestId}`, { ...requestData }, options);

    return {
        edit,
    }
};

export const useDeleteRequest = () => {
    const { request } = useAuth();
    const { accessToken } = useAuth();

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const deleteCustomerReqeust = (requestId) =>
        request.delete(`${baseUrl}/${requestId}`, null, options);

    return {
        deleteCustomerReqeust,
    }
};

