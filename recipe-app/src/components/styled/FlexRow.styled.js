import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: center;
  padding: ${({ padding }) => padding || "1.5rem"};
  ${({ rowReverse }) => (rowReverse ? "flex-direction: row-reverse;" : "")}
  gap: ${({ gap }) => gap || "auto"};
`;

export default FlexRow;
