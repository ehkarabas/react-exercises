import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  color: ${({ color }) => color || "inherit"};
  border: 1px solid #249da6;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  margin: 1rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export default Button;
