import { getUserData } from "./userUtils";

export const request = async (method, url, data) => {
    try {
        const { accessToken } = getUserData();
        let requestOption = { method };

        requestOption.headers = {
            'Content-Type': 'application/json',
        };

        if (data) {
            requestOption.body = JSON.stringify(data);
        }

        if (accessToken) {
            requestOption.headers['X-Authorization'] = accessToken;
        }

        const response = await fetch(url, requestOption);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || `HTTP Error: ${response.status}`);
        }

        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};