export const saveUserData = (userData) => {
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('_id', userData._id);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('role', userData.role);
}

export const getUserData = () => {
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('email');
    const _id = localStorage.getItem('_id');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    return {
        accessToken,
        email,
        _id,
        username,
        role
    }
}

export const clearUserData = () => {
    localStorage.clear('accessToken');
    localStorage.clear('email');
    localStorage.clear('_id');
    localStorage.clear('username');
    localStorage.clear('role');
}