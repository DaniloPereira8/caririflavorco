import Logo from '../../assets/logologin.png';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
    return(
        <Container>
            <Banner>
                {/* <img src={Logo} alt= 'Logodeuburger'/> */}
            </Banner>
            <Title>Concluir Pedido</Title>
            <Content>
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    );
}