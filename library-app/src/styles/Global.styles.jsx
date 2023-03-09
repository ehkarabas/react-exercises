import { createGlobalStyle } from "styled-components";

//create global styles
export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: uppercase;
    ${"" /* font-family: "Shantell Sans",cursive; */}
    font-family: 'Fira Code', monospace;
  }

  html{
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 0.9rem;
    }
    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
      font-size: 0.7rem;
    }
    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.lowest}) {
      font-size: 0.6rem;
    }
  }
  body{
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  .swal2-popup {
  font-size: 0.8rem !important;
  font-family: Georgia, serif;
  padding: 0.5rem;
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.mobile}) {
      font-size: 0.7rem !important;
    }
    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.lowest}) {
      font-size: 0.6rem !important;
    }
  }
`;
