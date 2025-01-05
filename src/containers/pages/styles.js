import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ClientOrdersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 40px;
    text-align: center;
`;

export const OrdersList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`;

export const OrderCard = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(31, 30, 30, 0.1);
`;

export const OrderTitle = styled.h3`
    font-size: 1.20rem;
    color: #333;
    text-align: center;
`;

export const OrderStatus = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: #A02644;
    text-align: center;
    margin-top: 10px;
    background-color: #cdcdcd;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cf3057;
`;

export const ProductsList = styled.div`
    padding-left: 20px;

    ul {
        padding-left: 5px;
    }

    li {
        font-size: 1rem;
        color: #555;
    }
`;

export const NoOrdersMessage = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #6665;
`;

export const LinkToMenu = styled(Link)`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff6347;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e55347;
    }
`;
