import styled from "styled-components";

const Image = styled.img`
  max-width: 270px;
  width: ${({ setWidth }) => setWidth || "33%"};
  ${({ setWidth }) => !setWidth && "min-width: 200px"};
  border-radius: 1rem;
`;

export default Image;
