import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ gap }) => gap || "auto"};
  flex: ${({ flex }) => flex || "auto"};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  & .row-reversing:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export default FlexColumn;
