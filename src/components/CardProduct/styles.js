import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  
  /* Ajuste para responsividade */
  @media (max-width: 768px) {
    padding: 15px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 20px;
  }

  div {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    /* Ajustando o texto dentro do div */
    p {
      font-size: 16px; /* Ajustando o tamanho da fonte */
      color: ${(props) => props.theme.orange};
      line-height: 20px;
      font-weight: 700;
      margin-top: 20px; /* Reduzindo a margem */
    }

    strong {
      font-size: 20px; /* Ajustando o tamanho da fonte */
      color: ${(props) => props.theme.black};
      font-weight: 800;
      line-height: 20px;
    }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -45px;

  /* Ajuste da imagem para telas menores */
  @media (max-width: 768px) {
    height: 80px;
    top: -40px;
  }

  @media (max-width: 480px) {
    height: 60px;
    top: -35px;
  }
`;
