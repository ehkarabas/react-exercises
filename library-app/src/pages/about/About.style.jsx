import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  line-height: 2;
  text-align: center;
  margin-bottom: ${({ marginbottom }) => marginbottom || 0};
`;

export const ProfileImg = styled.img`
  margin: 2rem 0;
  border-radius: 50%;
  height: 150px;
  filter: drop-shadow(-5px 10px 10px #666);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: 135px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.lowest}) {
    height: 120px;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 2rem 1rem;
  width: 60%;
  border: 1px solid white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.aboutColor};
`;

export const IconContainer = styled.div`
  margin: 2rem;
  a {
    color: gray;
    padding: 1rem;
  }
`;
