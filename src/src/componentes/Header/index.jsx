import React, { Fragment } from "react";
import LogoImg from "../../assets/img_1.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  return(
    <Container>
      <Logo>
        <img src={LogoImg} alt=""/>
      </Logo>
      <Menu>
        <ul>
          <li><span>Login</span></li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;