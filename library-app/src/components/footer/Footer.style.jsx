import styled, { css } from "styled-components";

const FooterStyled = styled.footer`
  position: ${({ position }) => position || "static"};
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  /* height: 8rem; */
  ${(position) =>
    position &&
    css`
      bottom: 0;
      right: 0;
      left: 0;
    `}
`;

export default FooterStyled;
