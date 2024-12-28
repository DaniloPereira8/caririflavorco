import styled from "styled-components";


export const ContainerButton = styled.button`
width: 100%;
height: 52px;
border: none;
border: 5px;
background-color: ${(props) => props.theme.purple};
font-family: 'Road Rage', sans-serif ;
font-size: 30px;
color: ${(props)=>props.theme.white};

&:hover {

background-color: ${(props) => props.theme.secondDarkPurple};
border: 3px dashed ${(props)=>props.theme.white};
border-radius: 5px;
}
`