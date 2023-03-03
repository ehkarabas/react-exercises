import Button from "./styled/Button.styled";
import FlexRow from "./styled/FlexRow.styled";
import Image from "./styled/Image.styled";
import Nav from "./styled/Nav.styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <FlexRow padding="0" gap="1rem">
          <Image src="./images/ehlogo-transparent.png" setWidth="50px" />
          <h1>
            Cool<span>Dev</span>
          </h1>
        </FlexRow>
        <div>
          <Button bgColor="#249da6" color="white">
            Our Services
          </Button>
          <Button bgColor="white" color="#249da6">
            Contact
          </Button>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
