import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  width: 100%;
  padding: 0 56px;
  background-color: ${(props) => props.theme.mainBlack};
  z-index: 1000; 
  position: fixed; 
  top: 0;         
  left: 0;         
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
max-width: 1280px;
margin: 0 auto;
`;

export const Navigation = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 72px;

div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

hr {
    height: 24px;
    border: 1px solid ${(props)=>props.theme.darkGray};
}
`;

export const HeaderLink = styled(Link)`
color: ${(props ) =>  (props.$isActive ? props.theme.purple : props =>  props.theme.white)};
border-bottom: ${( props )=> ( props.$isActive ? `1px solid ${ props.theme.purple}` : 'none')};
padding-bottom: 5px;
text-decoration: none;
font-size: 14px;
transition: color 200ms;

&:hover {
    color: ${(props) => props.theme.purple};
}

`;

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 48px;
`;

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 12px;
font-size: 14px;

p {
   color : ${(props) => props.theme.white} ;
   line-height: 90%;
   font-weight: 300;

   span {
    font-weight: 700;
    color: ${(props) => props.theme.purple};
   }
}
`;

export const LinkContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;

position: relative;
`;

export const Logout = styled.button`
color: ${(props) => props.theme.red};
text-decoration: none;
font-weight: 700;
background-color: transparent;
border: none;
`;

export const MainContent = styled.main`
  padding-top: 70px;   
`;


export const CartItemCount = styled.span`
    background-color: #ff714b; /* Cor de destaque */
    color: white;
    border-radius: 12px;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    position: absolute; /* Posiciona o contador em cima do ícone */
    top: -5px; /* Ajuste a posição vertical */
    right: -5px; /* Ajuste a posição horizontal */
`;

