import styled from "styled-components";

export const Container = styled.div`
  height: 70px; /* Aumentei a altura para comportar mais itens */
  background-color: ${(props) => props.theme.darkPurple};
  width: 100vw;
  display: flex;
  flex-direction: column; /* Para alinhar itens em coluna */
  justify-content: center;
  align-items: center;
  padding: 10px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
    margin: 5px 0;
  }

  .social-icons {
    display: flex;
    gap: 15px; /* Espaçamento entre ícones */
    margin-top: 5px;

    a {
      color: ${(props) => props.theme.white};
      font-size: 20px; /* Tamanho dos ícones */
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.lightPurple};
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    .social-icons {
      justify-content: center;
    }
  }
`;
