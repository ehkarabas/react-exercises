import Header from "../../components/header/Header";
import { HomeContainer, HomeImg } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";

const Home = ({
  query,
  setQuery,
  selectType,
  setSelectType,
  myData,
  setMyData,
}) => {
  // const printType = ["all", "books", "magazines"];

  const { pathname: path } = useLocation();

  const APP_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&maxResults=20&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setMyData(data.items);
      console.log(data);
    } catch (error) {
      const errorArr = [
        error.response.status,
        error.response.statusText,
        error.message,
      ];
      console.log(errorArr[0], errorArr[1]);
      console.log(errorArr[2]);
    }
  };

  // console.log(myData);
  // console.log(selectType);
  return (
    <HomeContainer>
      <Header
        query={query}
        setQuery={setQuery}
        selectType={selectType}
        setSelectType={setSelectType}
        myData={myData}
        getData={getData}
      />
      {!myData.length || path === "/" ? (
        <HomeImg marginbottom={path === "/" ? "10rem" : "0"}>
          <img src={homeImg} alt="" />
        </HomeImg>
      ) : (
        <Outlet />
      )}
    </HomeContainer>
  );
};

export default Home;
