import axios from 'axios';

export const api = axios.create({

    baseURL: 'https://cariri-flavor-co-api.onrender.com'
});

api.interceptors.request.use( (config) => {
    const userData = localStorage.getItem('deuburger:userData');

    const token = userData && JSON.parse(userData).token

    config.headers.Authorization = `Bearer ${token}`;

    return  config;
});