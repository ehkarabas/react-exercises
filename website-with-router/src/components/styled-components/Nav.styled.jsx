import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: ${({ position }) => position || "static"};
  border-bottom: 2px solid #00bbc9;
  ${(position) =>
    position &&
    css`
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
    `};
`;

export default Nav;
