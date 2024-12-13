import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import {Banner, Container} from './styles';

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
      <div>
        <CategoriesCarousel/>
        <OffersCarousel/>
        </div>
    </Container>
    </main>
  );
}