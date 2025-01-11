import styled from "styled-components";

export const Container = styled.div`
height: 50px;
background-color: ${(props) => props.theme.darkPurple};
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
}
`;


// import styled from "styled-components";

// export const Container = styled.div`
//     height: 80px; /* Aumentei um pouco a altura */
//     background-color: ${(props) => props.theme.darkPurple};
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidade */
//     border-top-left-radius: 20px; /* Bordas arredondadas */
//     border-top-right-radius: 20px; /* Bordas arredondadas */
//     padding: 0 20px; /* Adicionando espaçamento nas laterais */
    
//     @media (max-width: 768px) {
//         height: 60px; /* Reduzindo a altura em telas menores */
//         padding: 0 15px; /* Menor espaçamento em telas menores */
//     }

//     @media (max-width: 480px) {
//         height: 50px; /* Ainda menor em dispositivos móveis */
//         padding: 0 10px; /* Menor padding */
//     }

//     p {
//         color: ${(props) => props.theme.white};
//         font-size: 14px;
//         font-weight: lighter;
//         text-align: center; /* Centralizando o texto */
//         letter-spacing: 1px; /* Aumentando o espaçamento entre as letras */
//         margin: 0;
        
//         @media (max-width: 768px) {
//             font-size: 12px; /* Font menor em dispositivos menores */
//         }
//     }

//     /* Adicionando hover para a área do footer */
//     &:hover {
//         background-color: ${(props) => props.theme.darkPurpleHover}; /* Alteração de cor no hover */
//     }
// `;
