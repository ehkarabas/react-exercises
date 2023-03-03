import FlexColumn from "./styled/FlexColumn.styled";
import FlexRow from "./styled/FlexRow.styled";
import Image from "./styled/Image.styled";

const Card = ({ title, body, image, index }) => {
  if (index % 2) {
    return (
      <FlexRow gap="1rem" bg>
        <FlexColumn flex="2">
          <h2>{title}</h2>
          <p>{body}</p>
        </FlexColumn>
        <Image src={`./images/${image}`} />
      </FlexRow>
    );
  } else {
    return (
      <FlexRow rowReverse gap="1rem" bg>
        <FlexColumn flex="2">
          <h2>{title}</h2>
          <p>{body}</p>
        </FlexColumn>
        <Image src={`./images/${image}`} />
      </FlexRow>
    );
  }
};

export default Card;
