// import { Link as ReactLink } from 'react-router-dom';
// import styled from 'styled-components';

// import BackgroundRegister from '../../assets/background.svg';
// import Background from '../../assets/background-login-register.png';

// export const Container = styled.div`
// display: flex;
// height: 100vh;
// width:100vw;
// `;

// export const LeftContainer = styled.div`
// background: url('${BackgroundRegister}');
// background-size: cover;
// background-position: center;

// height: 100%;
// width: 100%;
// max-width: 50%;
// display: flex;
// align-items: center;
// justify-content: center;
// background-color: #1e1e1e;

// img {
//     width: 100%;
// }

// `;

// export const RightContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// background: url('${Background}');
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// padding-bottom: 3.1rem;

// height: 100%;
// width: 100%;
// max-width: 50%;

// p {
//     color: ${(props) => props.theme.white};
//     font-size: 18px;
//     font-weight: 800;
    
//     a {
//         text-decoration: underline;
//     }
// }
// `;

// export const Title = styled.h2`
// font-family: "Road Rage", serif;
//   font-size: 40px;
//   color: ${(props) => props.theme.purple};
  

// `;

// export const Form = styled.form`
// display: flex;
// flex-direction: column;
// gap: 7px;
// padding: 20px;
// width: 100%;
// max-width: 400px;

// `;

// export const InputContainer = styled.div`
// display: flex;
// flex-direction: column;
// gap: 5px;
// width: 100%;

// input {
//     font-size: 15px;
//     width: 100%;
//     border: none;
//     height: 52px;
//     border-radius: 5px;
//     padding: 10px;

// }

// label {
//     font-size: 18px;
//     font-weight: 600;
//     color: ${(props) => props.theme.white};
// }


// p{
//     font-size: 14px;
//     line-height: 80%;
//     color: ${(props) => props.theme.darkRed};
//     font-weight: 600;
//     height: 10px;
// }
// `;

// export const Link = styled (ReactLink)`

//  text-decoration: none;
//  color: ${(props) => props.theme.white};
// `;


import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundRegister from '../../assets/Background.svg';
import Background from '../../assets/background-login-register.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    /* Responsividade */
    @media (max-width: 768px) {
        flex-direction: column; /* Empilha os containers para telas menores */
    }
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundRegister}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;

    img {
        width: 100%;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        max-width: 100%; /* Em telas menores, ocupa toda a largura */
        height: 50%; /* Diminui o tamanho para equilibrar o layout */
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('${Background}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 3.1rem;
    height: 100%;
    width: 100%;
    max-width: 50%;

    p {
        color: ${(props) => props.theme.white};
        font-size: 18px;
        font-weight: 800;
        
        a {
            text-decoration: underline;
        }
    }

    /* Responsividade */
    @media (max-width: 768px) {
        max-width: 100%; /* Em telas menores, ocupa toda a largura */
        padding-bottom: 20px; /* Ajusta o padding */
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", serif;
    font-size: 40px;
    color: ${(props) => props.theme.purple};
    text-align: center;

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 30px; /* Reduz o tamanho da fonte em telas menores */
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 20px;
    width: 100%;
    max-width: 400px;

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 15px;
        max-width: 350px; /* Diminui a largura máxima para telas menores */
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        font-size: 15px;
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 10px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.white};
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: ${(props) => props.theme.white};

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 14px; /* Ajusta o tamanho da fonte para telas menores */
    }
`;
