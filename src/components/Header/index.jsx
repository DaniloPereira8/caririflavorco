import { useState } from 'react';
import { UserCircle, ShoppingCart, List } from '@phosphor-icons/react';
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
  MobileMenuButton,
  MobileDropdown,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { totalItems } = useCart();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <>
      <Container>
        <Content>
          {/* Menu completo para telas maiores */}
          <Navigation className="desktop-menu">
            <div>
              <HeaderLink to="/" $isActive={pathname === '/'}>
                Início
              </HeaderLink>
              <hr />
              <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                Cardápio
              </HeaderLink>
              <hr />
              <HeaderLink to="/meus-pedidos" $isActive={pathname === '/meus-pedidos'}>
                Status do pedido
              </HeaderLink>
            </div>
          </Navigation>

          {/* Ícone de três pontinhos para telas menores */}
          <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <List color="#fff" size={32} />
          </MobileMenuButton>

          {showMobileMenu && (
            <MobileDropdown>
              <HeaderLink to="/" onClick={() => setShowMobileMenu(false)}>
                Início
              </HeaderLink>
              <HeaderLink to="/cardapio" onClick={() => setShowMobileMenu(false)}>
                Cardápio
              </HeaderLink>
              <HeaderLink to="/meus-pedidos" onClick={() => setShowMobileMenu(false)}>
                Status do pedido
              </HeaderLink>
              <Logout onClick={logoutUser}>Sair</Logout>
            </MobileDropdown>
          )}

          <Options>
            <Profile>
              <UserCircle color="#fff" size={40} />
              <div>
                <p>
                  Olá, <span>{userInfo.name}</span>
                </p>
                <hr />
                <Logout onClick={logoutUser}>Sair</Logout>
              </div>
            </Profile>
            <LinkContainer>
              <HeaderLink to="/carrinho">
                <ShoppingCart color="#fff" size={38} />
                {totalItems > 0 && <CartItemCount>{totalItems}</CartItemCount>}
              </HeaderLink>
            </LinkContainer>
          </Options>
        </Content>
      </Container>

      <MainContent></MainContent>
    </>
  );
}



// import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
// import { useNavigate, useResolvedPath } from 'react-router-dom';
// import { useUser } from '../../hooks/UserContext';
// import { useCart } from '../../hooks/CartContext';
// import { CartItemCount } from './styles';

// import {
//     Container,
//     HeaderLink,
//     LinkContainer,
//     Profile,
//     Options,
//     Navigation,
//     Logout,
//     Content,
//     MainContent,
// } from './styles';

// export function Header() {
//     const navigate = useNavigate();
//     const { logout, userInfo } = useUser();
//     const { pathname } = useResolvedPath();
//     const { totalItems } = useCart();

//     function logoutUser() {
//         logout();
//         navigate('/login');
//     }

//     return (
//         <>
//             <Container>
//                 <Content>
//                     <Navigation>
//                         <div>
//                             <HeaderLink to="/" $isActive={pathname === '/'}>
//                                 Início
//                             </HeaderLink>
//                             <hr />
//                             <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
//                                 Cardápio
//                             </HeaderLink>
//                             <hr />
//                             <HeaderLink to="/meus-pedidos" $isActive={pathname === '/meus-pedidos'}>
//                                 Acompanhar status do pedido
//                             </HeaderLink>
//                         </div>
//                     </Navigation>
//                     <Options>
//                         <Profile>
//                             <UserCircle color="#fff" size={40} />
//                             <div>
//                                 <p>
//                                     Olá, <span>{userInfo.name}</span>
//                                 </p>
//                                 <hr />
//                                 <Logout onClick={logoutUser}>Sair</Logout>
//                             </div>
//                         </Profile>
//                         <LinkContainer>
//                             <HeaderLink to="/carrinho">
//                                 <ShoppingCart color="#fff" size={38} />
//                                 {totalItems > 0 && (<CartItemCount>{totalItems}</CartItemCount>
//                                 )}
//                             </HeaderLink>
//                         </LinkContainer>
//                     </Options>
//                 </Content>
//             </Container>

//             <MainContent></MainContent>
//         </>
//     );
// }


