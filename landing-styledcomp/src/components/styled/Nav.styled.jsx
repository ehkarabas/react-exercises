import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  /* flex-wrap: wrap; */
  /* ThemeProvider wrapper'indaki theme prop'u ile global stillere erisim */
  background-color: ${({ theme }) => theme.colors.primary};
  /* @media only screen and (max-width: 700px) {
    flex-direction: column;
  } */
  & h1 {
    font-size: 3rem;

    span {
      color: #249da6;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
  /* @media only screen and (max-width: 360px) {
    text-align: center;
  } */
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default Nav;
