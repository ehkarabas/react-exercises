import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import "./detailsStyle.scss"

const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
const apiID = process.env.REACT_APP_RECIPE_API_ID;

const Details = () => {
  const { name } = useParams();
  // console.log(name);
  // console.log(name.replaceAll("_", " "));
  const { recipe } = useLocation();
  const [dataFetched, setDataFetched] = useState(recipe);
  const [isLoading, setIsLoading] = useState(true);

  const recipeFetcher = async () => {
    await axios(
      `https://api.edamam.com/search?q=${name.replaceAll(
        "_",
        " "
      )}&app_id=${apiID}&app_key=${apiKey}`
    )
      .then((res) => {
        // console.log(res);
        setDataFetched(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    recipeFetcher();
    // console.log(dataFetched);
  }, []);

  // console.log(dataFetched);

  if (!dataFetched) {
    if (isLoading) {
      recipeFetcher();
      // console.log(dataFetched);
      return null; // veya bir yüklenme animasyonu gösterilebilir
    }
  } else if (!dataFetched.hits.length) {
    return <Navigate to="/receipt-not-found" />;
  } else {
    const { label, ingredientLines, image, totalNutrients } =
      dataFetched.hits[0].recipe;
    return (
      <>
      <div className="details-bg"></div>
      <div className="container mt-3 d-flex flex-column justify-content-center align-items-center gap-3 ">
        <h1>{label}</h1>
        <div className="row g-3 mb-3">
          <div className="col-sm-4">
            <div className="ingredients bg-secondary bg-opacity-50 p-3 rounded-4">
              <h4 className="border-bottom pb-2">Ingredients</h4>
              <ul>
                {ingredientLines.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="recipe-pic d-flex justify-content-center">
              <img src={image} alt="recipe_pic" className="img-thumbnail" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="nutrients bg-secondary bg-opacity-50 p-3 rounded-4">
              <h4 className="border-bottom pb-2">Nutrients</h4>
              <ul>
                {Object.values(totalNutrients).map(
                  ({ label, quantity, unit }, index) => {
                    return (
                      <li key={index}>
                        {label + ": " + parseFloat(quantity).toFixed(2) + unit}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
};

export default Details;
