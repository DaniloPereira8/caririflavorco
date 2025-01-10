// import styled from "styled-components";

// export const ProductImage = styled.img`
// height: 80px;
// width: 80px;
// border-radius: 16px;
// `;

// export const ButtonGroup = styled.div`
// display: flex;
// align-items: center;
// gap: 12px;

// button{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 30px;
//     width: 30px;
//     color: ${(props) => props.theme.white};
//     border-radius: 4px;
//     background-color: ${(props) => props.theme.purple};
//     transition: all 0.4s;
//     border: none;

//     &:hover {
//         background-color: ${(props) => props.theme.secondDarkPurple};
//     }
// }
// `;

// export const EmptyCart = styled.p`
// font-size: 20x;
// text-align: center;
// font-weight: bold;
// `;

// export const ProductTotalPrice = styled.p`
// font-weight: bold;
// `;

// export const TrashImage = styled.img`
// height: 20px;
// width: 20px;
// cursor: pointer;
// `;


import styled from "styled-components";

// Ajuste na imagem do produto para responsividade
export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 480px) {
    height: 0px;
    width: 0px;
  }
`;

// Ajustes no grupo de botões para dispositivos menores
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }

    /* Ajuste de tamanho para telas menores */
    @media (max-width: 768px) {
      height: 25px;
      width: 25px;
    }

    @media (max-width: 480px) {
      height: 20px;
      width: 20px;
    }
  }
`;

// Ajuste de fonte e espaçamento no texto de "Carrinho Vazio"
export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// Ajuste de fonte para o preço total do produto
export const ProductTotalPrice = styled.p`
  font-weight: bold;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

// Ajuste na imagem do lixo
export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    height: 18px;
    width: 18px;
  }

  @media (max-width: 480px) {
    height: 16px;
    width: 16px;
  }
`;
