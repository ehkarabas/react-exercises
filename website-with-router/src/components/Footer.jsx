import Flex from "./styled-components/Flex.styled";
import FooterStyled from "./styled-components/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled position="fixed">
      <Flex padding="1rem" bgcolor="#202022">
        <Flex direction="column" justify="space-between">
          <small>Copyright &copy; {new Date().getFullYear()}</small>
          <Flex gap="1rem">
            <img
              src="./images/ehlogo-transparent.png"
              alt="brand_logo"
              width="50px"
            />
            <h1>
              Cool<span className="text-info">Dev</span>
            </h1>
          </Flex>
        </Flex>
      </Flex>
    </FooterStyled>
  );
};

export default Footer;
