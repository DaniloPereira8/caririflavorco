
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import {api} from '../../services/api';
import { ContainerItems, Container, Title} from './styles';

import 'react-multi-carousel/lib/styles.css';
// import { Container } from '../../containers/Home/styles';
// import { Title } from '../../containers/Login/styles';


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const {data} = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max:4000, min: 3000},
            items:4,
        },

        desktop: {
            breakpoint: { max:3000, min: 1280},
            items:4,
        },

        tablet: {
            breakpoint: { max:1280, min: 690},
            items:3,
        },

        mobile: {
            breakpoint: { max:690, min: 0},
            items:2,
        },
    };
    
    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"

                >

                    {categories.map ( (category) => (
                <ContainerItems key={category.id}imageUrl={category.url}>
                   <p>{category.name}</p> 
                    </ContainerItems>
                    ))}

            </Carousel>
        </Container>
    );
}