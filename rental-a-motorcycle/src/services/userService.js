import { request } from "../utils/requestsUtils";

const baseUrl = 'http://localhost:3000/auth';

export default{
    register(email, password) {
        return request('POST', `${baseUrl}/register`, { email, password });
    },
    login(email, password) {
        return request('POST', `${baseUrl}/login`, { email, password });
    },
    getOne(userId) {
        return request('GET', `${baseUrl}/users/${userId}`);
    },
    logout() {
        request('GET', `${baseUrl}/logout`);
    }
}
