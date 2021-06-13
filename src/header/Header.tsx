import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo";
import HeaderNavItem from "./HeaderNavItem";

const Header = () => {
  return (
    <HeaderContainer>
      <NavLogo to={"/Заказы"}>
        <Logo />
      </NavLogo>
      <nav>
        <HeaderNavItems>
          <HeaderNavItem name="Заказы" />
          <HeaderNavItem name="Товары" />
          {/* <HeaderNavItem name="История" /> */}
          <HeaderNavItem name="Профиль" />
        </HeaderNavItems>
      </nav>
    </HeaderContainer>
  );
};

const HeaderNavItems = styled.ul`
  list-style: none;
  width: 45vw;
  display: flex;
  margin-left: 20vw;
`;

const NavLogo = styled(NavLink)`
  margin-left: 5vw;
`;

const HeaderContainer = styled.header`
  background-color: white;
  height: 12vh;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  z-index:1;
`;

export default Header;
