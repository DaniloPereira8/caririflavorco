import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import { CartItemCount } from './styles';

import {
    Container,
    HeaderLink,
    LinkContainer,
    Profile,
    Options,
    Navigation,
    Logout,
    Content,
    MainContent,
} from './styles';

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname } = useResolvedPath();
    const { totalItems } = useCart();

    function logoutUser() {
        logout();
        navigate('/login');
    }

    return (
        <>
            <Container>
                <Content>
                    <Navigation>
                        <div>
                            <HeaderLink to="/" $isActive={pathname === '/'}>
                                Home
                            </HeaderLink>
                            <hr />
                            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                                Cardápio
                            </HeaderLink>
                        </div>
                    </Navigation>
                    <Options>
                        <Profile>
                            <UserCircle color="#fff" size={40} />
                            <div>
                                <p>
                                    Olá, <span>{userInfo.name}</span>
                                </p>
                                <hr/>
                                <Logout onClick={logoutUser}>Sair</Logout>
                            </div>
                        </Profile>
                        <LinkContainer>
                        <HeaderLink to="/carrinho">
                            <ShoppingCart color="#fff" size={38} />
                             {totalItems > 0 && (<CartItemCount>{totalItems}</CartItemCount>
                                )}
                            </HeaderLink>
                        </LinkContainer>
                    </Options>
                </Content>
            </Container>

            <MainContent></MainContent>
        </>
    );
}


