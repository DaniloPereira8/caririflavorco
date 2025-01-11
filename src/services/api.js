import axios from 'axios';

export const api = axios.create({

   baseURL: 'https://cariri-flavor-co-api.onrender.com'
});

api.interceptors.request.use( (config) => {
    const userData = localStorage.getItem('deuburger:userData');

    const token = userData ? JSON.parse(userData).token : null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

    return  config;
});

export const fetchClientOrders = async () => {
    try {
        const response = await api.get('/client/orders'); // Faz a chamada à rota do back-end
        return response.data; // Retorna os dados dos pedidos
    } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
        throw error;
    }
};