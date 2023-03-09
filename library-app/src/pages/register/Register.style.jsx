import styled from "styled-components";
import Flex from "../../styles/Flex";

export const RegisterContainer = styled(Flex)`
  height: 90vh;
  min-height: 450px;
  background-image: url("https://media.istockphoto.com/id/869283118/photo/register-online.jpg?s=612x612&w=0&k=20&c=G9FeU0sYw0pJMr3FKVuCqRqgOnqcupdDpbq5sqdqMRc=");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  padding: 0.5rem;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  width: 50vw;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  top: 50%;
  left: 50%;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 2rem;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`;

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 100%;
  color: #fff;
  text-shadow: 3px 0px 7px rgba(221, 67, 21, 0.8),
    -3px 0px 7px rgba(221, 67, 21, 0.8), 0px 4px 7px rgba(221, 67, 21, 0.8);
  /* -webkit-text-fill-color: transparent; */
  /* color: transparent; */
  transform: translate(0.1em, 0.1em);
  /* background-image: linear-gradient(305deg, darkblue, yellow, darkblue); */
  /* -webkit-background-clip: text; */
`;

export const StyledInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 300;
  outline: none;
  border: none;
  ::placeholder {
    color: black;
  }
  :focus {
    background-color: white;
  }
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  color: ${({ theme }) => theme.colors.logoColor};
  padding: 15px 0;
  opacity: 0.5;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
