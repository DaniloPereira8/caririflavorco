import styled from 'styled-components';
import BannerHome from '../../assets/home.png';
import Background from '../../assets/background.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    left: 0;
    padding-left: 100px;
    top: 30%;
    
    /* Responsividade para telas menores que 768px */
    @media (max-width: 768px) {
      font-size: 70px;  /* Reduz o tamanho da fonte */
      padding-left: 50px;  /* Ajusta o padding em telas pequenas */
      top: 30%;  /* Ajusta a posição vertical */
    }
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url('${Background}');
  height: 800px;

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    height: 600px;  /* Ajusta a altura do container em telas pequenas */
  }
`;

// export const Content = styled.div``; // Se necessário, pode ser reativado conforme o uso
