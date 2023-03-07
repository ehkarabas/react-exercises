import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import "./homeStyle.scss";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
const apiID = process.env.REACT_APP_RECIPE_API_ID;
const mealTypes = ["Breakfast", "Brunch", "Snack", "Teatime", "Dinner"];

const Home = () => {
  const [data, setData] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState(mealTypes[0].toLowerCase());

  const getRecipes = async () => {
    await axios(
      `https://api.edamam.com/search?q=${query}&app_id=${apiID}&app_key=${apiKey}&mealType=${mealType}`
    )
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        const errorArr = [
          err.response.status,
          err.response.statusText,
          err.message,
        ];
        setErrorState(errorArr);
      });
  };

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center gap-3 ">
      {errorState ? (
        <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <p className="text-center text-danger w-100">{`${errorState[0]} ${errorState[1]}`}</p>
          <p className="text-center text-black w-100">{errorState[2]}</p>
        </div>
      ) : (
        <>
          <div className="home-bg"></div>
          <Header
            query={query}
            setQuery={setQuery}
            mealTypes={mealTypes}
            mealType={mealType}
            setMealType={setMealType}
            getRecipes={getRecipes}
          />
          <div className="row g-3 mb-4">
            {data
              ? data.hits.map(({ recipe }, index) => {
                  return <RecipeCard recipe={recipe} key={index} />;
                })
              : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
