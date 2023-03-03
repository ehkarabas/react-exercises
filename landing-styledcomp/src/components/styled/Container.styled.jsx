import styled from "styled-components";

const Container = styled.div`
  max-width: 1400px;
  /* min-width: 260px; */
  margin: auto;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

export default Container;

// ! import CSS and usage
// import styled, { css } from "styled-components";

// const Links = styled.a`
//   text-decoration: none;
//   font-size: 1.2rem;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   &:visited {
//     color: inherit;
//   }
//   &:hover {
//     font-weight: bold;
//   }
//   ${({ small }) =>
//     small &&
//     css`
//       background-color: black;
//       color: #61dbfb !important;
//       padding: 1rem;
//     `}
// `;

// export default Links;
