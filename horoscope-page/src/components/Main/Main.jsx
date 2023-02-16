import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

{
  /* <h1>{data[4].title}</h1> */
}

const Main = () => {
  // console.log(data);
  return (
    <div className="cards-container">
      {data.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default Main;
