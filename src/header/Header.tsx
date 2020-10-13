import React from "react";
import styled from "styled-components";
import Logo from "../img/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <NavLogo href="#">
        <Logo />
      </NavLogo>
      <HeaderNavItems>
        <HeaderNavItem active href="#">
          Заказы
        </HeaderNavItem>
        <HeaderNavItem href="#">Товары</HeaderNavItem>
        <HeaderNavItem href="#">История</HeaderNavItem>
        <HeaderNavItem href="#">Профиль</HeaderNavItem>
      </HeaderNavItems>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: white;
  height: 12vh;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const HeaderNavItems = styled.nav`
  width: 45vw;
  display: flex;
  margin-left: 15vw;
`;

const NavLogo = styled.a`
  margin-left: 5vw;
`;

const HeaderNavItem = styled.a`
  background-color: white;
  color: black;
  ${(props: { active?: boolean }) =>
    props.active && "background-color: #A72B2B; color: white;"}
  height: 12vh;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  text-decoration: none;
`;

export default Header;
