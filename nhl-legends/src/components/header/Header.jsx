import { Container, Image } from "react-bootstrap";
import nhlLogo from "../../assets/nhl-logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={nhlLogo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">NHL Legends</h1>
    </Container>
  );
};

export default Header;
