import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavItemProps{
  name: string;
};

const HeaderNavItem: React.FC<NavItemProps> = ({ name }) => {
  return (
    <li>
      <NavItemLink
        to={`/${name}`}
        activeStyle={{
          backgroundColor: "#A72B2B",
          color: "white",
        }}
      >
        {name}
      </NavItemLink>
    </li>
  );
};

const NavItemLink = styled(NavLink)`
  background-color: white;
  color: black;
  height: 12vh;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  text-decoration: none;
`;

export default HeaderNavItem;
