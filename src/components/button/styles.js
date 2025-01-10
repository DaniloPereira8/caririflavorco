// import styled from "styled-components";


// export const ContainerButton = styled.button`
// width: 100%;
// height: 52px;
// border: none;
// border: 5px;
// background-color: ${(props) => props.theme.purple};
// font-family: 'Road Rage', sans-serif ;
// font-size: 30px;
// color: ${(props)=>props.theme.white};

// &:hover {

// background-color: ${(props) => props.theme.secondDarkPurple};
// border: 3px dashed ${(props)=>props.theme.white};
// border-radius: 5px;
// }
// `

import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 400px; /* Define um limite de largura */
  height: 52px;
  border: 5px solid transparent; /* Ajuste para border ficar invisível por padrão */
  background-color: ${(props) => props.theme.purple};
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  color: ${(props) => props.theme.white};
  padding: 10px 20px; /* Adiciona padding interno para deixar o botão mais espaçoso */

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
    border: 3px dashed ${(props) => props.theme.white};
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    font-size: 24px; /* Ajusta o tamanho da fonte para tablets */
    height: 45px; /* Ajusta a altura do botão */
  }

  @media (max-width: 480px) {
    font-size: 30px; /* Reduz ainda mais a fonte em dispositivos móveis */
    height: 60px; /* Ajusta a altura do botão para celulares */
    

    
  }
`;
