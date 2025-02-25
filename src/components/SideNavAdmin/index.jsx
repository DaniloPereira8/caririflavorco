import { SignOut } from "@phosphor-icons/react";
import { useResolvedPath } from "react-router-dom";

import Logo from "../../assets/logotipo.png";
import { useUser } from "../../hooks/UserContext";
import { navLinks } from "./navLinks";
import { Container, NavLinkContainer, NavLink, Footer } from "./styles";

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath(); // Obtém a rota atual

  return (
    <Container>
      <img src={Logo} alt="Hamburguer Logo deuBurger" />
      <NavLinkContainer>
        {navLinks.map((Link) => (
          <NavLink 
            key={Link.id} 
            to={Link.path}
            $isActive={pathname === Link.path} // Compara a rota ativa com o link
          >
            {Link.icon}
            <span>{Link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}