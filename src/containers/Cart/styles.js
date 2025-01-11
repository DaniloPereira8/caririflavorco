import styled from "styled-components";
import Texture from '../../assets/backgroundcheckout.png'
import Background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
  ),
  url('${Background}');
  min-height: 100vh;

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    background-size: cover;  /* Garante que o fundo cubra a tela em dispositivos menores */
  }
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 220px;

  img {
    height: 15rem;
  }

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    height: 180px;  /* Ajusta a altura do banner para telas pequenas */
    
    img {
      height: 10rem;  /* Ajusta a altura da imagem */
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.gren};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
  }

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    font-size: 24px;  /* Reduz o tamanho da fonte do título */
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Ajusta o grid para uma coluna em telas menores */
    padding: 20px;  /* Reduz o padding em dispositivos móveis */
  }
`;
