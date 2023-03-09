import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  gap: ${({ gap }) => gap || "auto"};
  padding: ${({ padding }) => padding || "0"};
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  color: ${({ color }) => color || "inherit"};
  text-align: ${({ textalign }) => textalign || "start"};
  ${({ bgimage }) => (bgimage && "background-image: url(" + bgimage + ")": "")};
  ${(bgimage) =>
    bgimage &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      object-fit: cover;
    `}
`;

export default Flex;
