import styled from "styled-components";

const Toggle = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 1;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
  span {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    width: 35px;
    height: 35px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.lowest}) {
    width: 30px;
    height: 30px;
  }
`;

export default Toggle;
