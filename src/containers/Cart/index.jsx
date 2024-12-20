import Logo from '../../assets/Logo.svg';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
    return(
        <Container>
            <Banner>
                <img src={Logo} alt= 'Logodeuburger'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CartResume>
                </CartResume> */}
            </Content>
        </Container>
    );
}