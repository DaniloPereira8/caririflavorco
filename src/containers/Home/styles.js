import styled from 'styled-components';
import BannerHome from '../../assets/home.png';
import Background from '../../assets/Background.svg';

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 480px;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    left: 0;
    padding-left: 100px;
    top: 30%;
}
`;


export const Container = styled.section`
background: linear-gradient(
    rgba(255,255,255, 0.6),
    rgba(255,255,255, 0.6)
),

url('${Background}');
height: 800px;
`;

// export const Content = styled.div``;
//ficou como div, mas se for usar precisa alterar para content no index