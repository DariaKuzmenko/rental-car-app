import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  margin: 30px 0;
  background-color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1184px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const SVG = styled.svg`
  color: black;
`;
