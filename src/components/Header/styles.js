import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  width: 100%;
  padding: 0 56px;
  background-color: ${(props) => props.theme.mainBlack};
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
   padding-top: 15px;
   height: 85px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  hr {
    height: 24px;
    border: 1px solid ${(props) => props.theme.darkGray};
  }

  @media (max-width: 768px) {
    hr {
      display: none;
    }

    div {
      display: none;
    }
  }


`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.white};
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.purple}` : 'none'};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-bottom: 9px;
  }

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    @media (max-width: 768px) {
      line-height: 100%;
      
  }

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  hr {
    height: 24px;
    border: 1px solid ${(props) => props.theme.darkGray};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  padding-top: 70px;

`;

export const CartItemCount = styled.span`
  background-color: #ff714b;
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute; /* Coloca o botão em uma posição fixa no layout */
    top: 30px;          /* Ajusta a distância do topo */
    left: 10px;         /* Alinha o botão à esquerda */
    z-index: 1000;     /* Garante que o botão fique acima de outros elementos */
    padding-right: 1px;
  }
`;


export const MobileDropdown = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  left: 2%;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;

  a {
    display: block;
    color: ${(props) => props.theme.white};
    text-decoration: none;
    margin: 10px 0;
    font-size: 18px;
  }

  button {
    display: block;
    background: none;
    border: none;
    color: ${(props) => props.theme.red};
    font-size: 18px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
