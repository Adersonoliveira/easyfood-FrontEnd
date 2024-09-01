import React, {Fragment} from "react";
import LogoImg from "../../assets/img_1.png";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {Container, Copy, Item} from "./styles";


const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          {/*<img src={LogoImg} alt=""/>*/}
          <p>A indecisao nos faz perder grandes oportunidades</p>
          <nav>
            <li><span><FaFacebook size={30} /></span></li>
            <li><span><FaInstagram size={30} /></span></li>
            <li><span><FaWhatsapp size={30} /></span></li>
          </nav>
        </Item>
      </Container>
      <Copy>
          <p>© Copyright 2024 - Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li><span>Termos de uso</span></li>
          <li><span>Política de Privacidade</span></li>
          <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
    </Fragment>
  )
}

export default Footer;