// import { Link as ReactLink } from 'react-router-dom';
// import styled from 'styled-components';

// import BackgroundLogin from '../../assets/background.svg';
// import Background from '../../assets/Background-login-register.png';


// export const Container = styled.div`
// display: flex;
// height: 100vh;
// width:100vw;
// `;

// export const LeftContainer = styled.div`
// background: url('${BackgroundLogin}');
// background-size: cover;
// background-position: center;
// background-repeat: no-repeat;

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
//   color: ${(props) => props.theme.white};
  
//   span {
//     font-family: "Road Rage", serif;
//     color: ${(props) => props.theme.purple};
//   }
// `;

// export const Form = styled.form`
// display: flex;
// flex-direction: column;
// gap: 20px;
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

import BackgroundLogin from '../../assets/Background.svg';
import Background from '../../assets/background-login-register.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    flex-direction: column;  /* Deixa os containers um abaixo do outro */
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    max-width: 100%;  /* Faz a imagem ocupar 100% da largura em telas pequenas */
    height: 50%;  /* Ajusta a altura */
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

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    max-width: 100%;  /* Deixa o container ocupar 100% da largura */
    padding-bottom: 2rem;  /* Ajusta o padding */
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", serif;
  font-size: 40px;
  color: ${(props) => props.theme.white};

  span {
    font-family: "Road Rage", serif;
    color: ${(props) => props.theme.purple};
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 30px;  /* Reduz o tamanho da fonte */
    text-align: center;  /* Centraliza o título */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    max-width: 90%;  /* Aumenta a largura do formulário em telas pequenas */
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
`;
