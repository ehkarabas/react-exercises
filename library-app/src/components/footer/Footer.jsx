import FooterStyled from "./Footer.style";
import Flex from "../../styles/Flex";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname: path } = useLocation();
  return (
    <FooterStyled position={path === "/" || "/about" ? "fixed" : "static"}>
      <Flex padding="1rem">
        <Flex
          direction="column"
          justify="space-between"
          color="#fff"
          gap="0.5rem"
        >
          <small>Copyright &copy; {new Date().getFullYear()}</small>
          <Flex gap="1rem">
            <img
              src="/images/ehlogo-transparent.png"
              alt="brand logo"
              width="50px"
            />
            <h1>
              Cool<span style={{ color: "aqua" }}>Dev</span>
            </h1>
          </Flex>
        </Flex>
      </Flex>
    </FooterStyled>
  );
};

export default Footer;
