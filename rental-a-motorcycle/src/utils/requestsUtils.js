import { getUserData } from "./userUtils";

export const request = async (method, url, data) => {
    const { accessToken } = getUserData();
    let requestOption = {};

    if(data) {
    
        requestOption.headers = {
            'Content-type': 'application/json',
        };

        requestOption.body = JSON.stringify(data);
    }

    if(accessToken){
        requestOption.headers = {
            ...requestOption.headers,
            'X-Authorization': accessToken,
        };  
    }

    if(method !== 'GET'){
        requestOption.method = method;
    }

    const response = await fetch(url, requestOption);

    if(response.status == 204){
        return response.json();
    }

    const result = await response.json();
    
    return result;
}