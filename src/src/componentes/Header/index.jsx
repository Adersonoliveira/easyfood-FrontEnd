import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/img_1.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  return(
    <Container>
      <Logo>
        <Link to ='/'>
        <img src={LogoImg} alt=""/>
      </Link>
    </Logo>
  <Menu>
        <ul>
          <li><Link to='/login'><span>Login</span></Link></li>
          <li><Link to='/cadastro'><span>Registrar</span></Link></li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;