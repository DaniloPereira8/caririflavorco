import {Banner, Container, Content} from './styles';

// import HomeLogo from '../../assets/home-logo.svg'
// import { CategoryCarousel, OffersCarousel } from '../../components'
// import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <main>
        <Banner>
            <h1>Bem-Vindo(a)!</h1>
        </Banner>
    <Container>
      <Content>
        <div>Carrosel Categorias</div>
        <div>Carrosel Produtos</div>
      </Content>
    </Container>
    </main>
  );
}