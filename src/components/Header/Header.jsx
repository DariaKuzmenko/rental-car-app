import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavList, StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <div>
          <h2>
            <NavLink to="/">RentalCar</NavLink>
          </h2>
        </div>

        <NavList>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </NavList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
