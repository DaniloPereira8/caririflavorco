import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
    z-index: 999;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
    z-index: 999;
  }

  padding-left: 40px;
  cursor: grab;

  /* Ajuste para telas menores que 768px */
  @media (max-width: 768px) {
    padding-left: 20px;
    .carousel-item {
      padding-right: 20px;
    }
  }

  /* Ajuste para telas menores que 480px */
  @media (max-width: 480px) {
    padding-left: 10px;
    .carousel-item {
      padding-right: 10px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }

  /* Ajuste de fonte para telas menores que 768px */
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  /* Ajuste de fonte para telas menores que 480px */
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;

  /* Ajuste para telas menores que 768px */
  @media (max-width: 768px) {
    height: 200px;
    padding: 15px;
  }

  /* Ajuste para telas menores que 480px */
  @media (max-width: 480px) {
    height: 150px;
    padding: 10px;
  }
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  margin-top: 50px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  /* Ajuste para telas menores que 768px */
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 18px;
    margin-top: 40px;
  }

  /* Ajuste para telas menores que 480px */
  @media (max-width: 480px) {
    padding: 6px 15px;
    font-size: 16px;
    margin-top: 30px;
  }
`;
