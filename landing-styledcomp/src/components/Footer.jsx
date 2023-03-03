import FooterStyled from "./styled/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <h3>&copy; CoolDev {new Date().getFullYear()}</h3>
    </FooterStyled>
  );
};

export default Footer;
