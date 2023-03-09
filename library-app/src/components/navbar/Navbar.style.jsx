import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const Nav = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const Logo = styled(NavLink)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* white-space: pre-wrap; */
    word-wrap: break-word;
  }
`;

export const Menu = styled(Flex)`
  font-weight: bold;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    transition: all 0.3s ease-in;
    max-height: ${({ showMenu }) => (showMenu ? "300px" : "0")};
    overflow: hidden;
  }
`;

export const MenuLink = styled(NavLink).attrs({
  activeclassname: "active",
})`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
  &.active {
    color: ${({ activecolor }) => activecolor || "red"};
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;
