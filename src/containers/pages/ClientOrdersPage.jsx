import React from 'react';
import ClientOrdersContainer from '../ClientOrders/ClientOrdersContainer';
import {
    Title,
    OrdersList,
    OrderCard,
    OrderTitle,
    ProductsList,
    LinkToMenu,
    NoOrdersMessage,
    ClientOrdersWrapper,
    OrderStatus
} from './styles'; // Importando os estilos do arquivo styles.js

const ClientOrdersPage = () => {
    const { orders, loading, error } = ClientOrdersContainer();

    if (loading) return <p>Carregando pedidos...</p>;
    if (error) return <p>{error}</p>;

    // Tratamento para quando não houver pedidos
    const hasOrders = orders && orders.length > 0;

    return (
        <ClientOrdersWrapper>
            <Title>Meus Pedidos</Title>
            {hasOrders ? (
                <OrdersList>
                    {orders.map((order) => (
                        <OrderCard key={order._id}>
                            <OrderTitle>Pedido #{order._id}</OrderTitle>
                            <OrderStatus>Status: {order.status}</OrderStatus>
                            <ProductsList>
                                <h4>Produtos:</h4>
                                <ul>
                                    {order.products.map((product) => (
                                        <li key={product.id}>
                                            {product.name} - {product.quantity}x
                                        </li>
                                    ))}
                                </ul>
                            </ProductsList>
                            {/* <p><strong>Total:</strong> R${order.total}</p> */}
                        </OrderCard>
                    ))}
                </OrdersList>
            ) : (
                <NoOrdersMessage>
                    <p>Ainda não fez sua compra?</p>
                    <LinkToMenu to="/cardapio">Volte ao Cardápio para fazer seu pedido!</LinkToMenu>
                </NoOrdersMessage>
            )}
        </ClientOrdersWrapper>
    );
};

export default ClientOrdersPage;