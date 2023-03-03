import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || "1.5rem"};
  ${({ rowReverse }) => (rowReverse ? "flex-direction: row-reverse;" : "")}
  gap: ${({ gap }) => gap || "auto"};
  ${({ bg }) => bg && "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
  /* @media only screen and (max-width: 700px) {
    flex-direction: column;
  } */
  /* flex default values */
  /* flex-shrink:1; */
  /* flex-grow: 0; */
  /* flex-basis: auto; */

  /* flex shorthand */
  /* Three values: flex-grow | flex-shrink | flex-basis */
  /* flex: 2 2 10%; */
  /* Two values: flex-grow | flex-shrink */
  /* flex: 2 2; */ // burada da flex-basis 0
  /* Two values: flex-grow | flex-basis */
  /* flex: 1 30px; */
  /* One value, unitless number: flex-grow
  flex-basis is then equal to 0. */
  /* flex: 2; */
  /* One value, width/height: flex-basis */
  /* flex: 10em;
  flex: 30%;
  flex: min-content; */

  & .header-description {
    flex: 2;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    & .header-description {
      .header-button {
        align-self: center;
      }
    }
  }
`;

export default FlexRow;
