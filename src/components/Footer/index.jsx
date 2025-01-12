import { Container } from "./styles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones de Instagram e WhatsApp

export function Footer() {
  return (
    <Container>
      <p>© Danilo - 2025 - ALL RIGHTS RESERVED</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/danilopereiraof/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/message/Z23BA3OVWEBTP1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </Container>
  );
}
