import Card from "../../components/card/Card";
import { MainContainer } from "./Home.style";

const Query = ({ query, selectType, myData }) => {
  // console.log(myData);

  return (
    <MainContainer wrap="wrap" marginbottom="10rem">
      {myData.map((item, index) => {
        return <Card key={`card${index + 1}`} item={item} />;
      })}
    </MainContainer>
  );
};

export default Query;
