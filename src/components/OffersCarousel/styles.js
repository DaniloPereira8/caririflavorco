import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
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
  padding-bottom: 40px;

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-bottom: 20px;
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    padding-left: 10px;
    padding-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 40px 0;
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    font-size: 24px;
    margin: 30px 0px 55px 0px;
  }
`;
