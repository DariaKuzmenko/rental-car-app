import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavList, SVG, StyledHeader } from "./Header.styled";
import sprite from "../../images/sprite.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <div>
          <h2>
            <NavLink to="/">RentalCar</NavLink>
          </h2>
          {/* <SVG width="12" height="12">
            <use href={`${sprite}#icon-car`}></use>
          </SVG> */}
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
