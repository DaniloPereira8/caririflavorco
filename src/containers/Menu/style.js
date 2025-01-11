import styled from "styled-components";
import BannerHamburger from '../../assets/offer.png';
import Background from '../../assets/background.png';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6)
  ),
  url('${Background}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  position: relative;
  background: url('${BannerHamburger}') no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    left: 0;
    top: 25%;
    padding-left: 100px;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
    }
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    height: 380px;

    h1 {
      font-size: 30px;
      padding-left: 20px;
      top: 25%;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    flex-direction: column;  /* Empilha os botões verticalmente */
    gap: 20px;
    margin-left: 2%;
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? props.theme.purple : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid #9758a6`};

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 0;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  gap: 60px;
  margin: 50px auto;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  /* Reduz o número de colunas */
    gap: 30px;
    margin: 30px auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;  /* Uma coluna em telas pequenas */
  }
`;

