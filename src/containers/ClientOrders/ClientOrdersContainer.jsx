import { useEffect, useState } from 'react';
import { fetchClientOrders } from '../../services/api';

const ClientOrdersContainer = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await fetchClientOrders();
                setOrders(data);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setOrders([]); // Nenhum pedido encontrado
                } else {
                    setError('Erro ao carregar pedidos.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return { orders, loading, error };
};

export default ClientOrdersContainer;

