// import styled from "styled-components";

// export const Root = styled.table`
// width: 100%;
// border-collapse: collapse;
// background-color: ${(props) => props.theme.white};
// border-radius: 20px;
// `;

// export const Header = styled.thead``;

// export const Tr = styled.tr``;

// export const Th = styled.th`
// padding: 16px;
// text-align: left;
// color: ${(props) => props.theme.white};
// background-color: ${(props) => props.theme.secondBlack};
// border-bottom: 1px solid ${(props)=>props.theme.lightGray};

// &:last-child {
//     border-top-right-radius: 20px;
// }

// &:first-child {
//     border-top-left-radius: 20px;
// }

// `;

// export const Td = styled.td`
// padding: 16px;
// color: ${(props) => props.theme.secondBlack};
// font-weight: 500;
// line-height: 115%;
// `;

// export const Body = styled.tbody`

// `;


import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  overflow-x: auto; /* Permite rolagem horizontal em telas menores */

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 115%;

  /* Responsividade para telas menores que 768px */
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  /* Responsividade para telas menores que 480px */
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;

export const Body = styled.tbody``;
