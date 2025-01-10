// import styled from "styled-components";

// export const ContainerButton = styled.button`
// background-color: ${(props) => props.theme.purple};
// width: 100%;
// height: 52px;
// border: 0;
// border-radius: 5px;
// font-size: 30px;
// color: ${(props) => props.theme.white};

// &:hover{
//     background-color: ${(props) => props.theme.secondDarkPurple};
// }
// `;

import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  width: 100%;
  max-width: 400px; /* Limita a largura máxima do botão */
  height: 52px;
  border: 0;
  border-radius: 5px;
  font-size: 30px;
  color: ${(props) => props.theme.white};
  padding: 10px 20px; /* Adicionando padding para tornar o botão mais espaçoso */

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    font-size: 24px; /* Ajusta o tamanho da fonte */
    height: 45px; /* Ajusta a altura do botão */
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    font-size: 18px; /* Reduz o tamanho da fonte em dispositivos móveis */
    height: 40px; /* Ajusta a altura do botão em celulares */
  }
`;


