import Button from "./styled/Button.styled";
import FlexRow from "./styled/FlexRow.styled";
import FlexColumn from "./styled/FlexColumn.styled";
import Image from "./styled/Image.styled";

const Header = () => {
  return (
    <div>
      <FlexRow>
        <FlexColumn className="header-description" gap="0.5rem">
          <h1>All your needs find solutions here!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quia quaerat dicta culpa eum. Voluptates debitis ex pariatur,
            tempore accusantium praesentium maiores earum ea consequatur illum,
            doloribus eos atque. Cum.
          </p>
          <Button bgColor="#249da6" color="white" className="header-button">
            Get A Quote
          </Button>
        </FlexColumn>
        <Image src="./images/hero.png" />
      </FlexRow>
    </div>
  );
};

export default Header;
