import styled from "styled-components";
import Select from "react-select";
import Typography from '@mui/material/Typography';  // Adicionando a importação


export const Container = styled.div`
  .MuiTableHead-root {
    font-weight: bolder;
    color:  ${(props) => props.theme.white};
    background: #A02644;
    border-radius: 5px;
  }
  `;

export const ProductImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 16px;
`
export const SelectStatus = styled(Select)`
width: 240px;
`
export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;
`
export const FilterOption = styled.button`
cursor: pointer;
background: none;
border: none;
color: ${(props) => 
props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
border-bottom: ${(props) => 
props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
font-size: 18px;
line-height: 20px;
padding-bottom: 5px;
`



//Estilos para o endereço mais sofisticados

export const AddressWrapper = styled.div`
  margin: 20px 0;
  padding: 16px;
  border: 2px solid ${(props) => props.theme.lightGray};
  border-radius: 12px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;  // Centraliza o conteúdo
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.hoverBackground};
  }
`;

export const AddressLine = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${(props) => props.theme.primaryText};
  text-transform: uppercase;
`;

export const Label = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.primary}; // cor de destaque
  text-transform: capitalize;
`;

export const AddressItem = styled(Typography)`
  font-size: 18px;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 8px;
  line-height: 1.7;
  padding-left: 10px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.5px;
`;

// Para um visual mais atraente, podemos adicionar uma borda inferior e um efeito de hover
export const AddressItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 2px solid ${(props) => props.theme.lightGray};
  padding-bottom: 12px;

  &:hover ${AddressItem} {
    color: ${(props) => props.theme.primary};  // Destacar na interação
  }
`;