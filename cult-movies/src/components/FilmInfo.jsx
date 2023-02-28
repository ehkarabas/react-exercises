import React, { useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = ({ data, year }) => {
  // console.log(data);
  // ! State creation is done once when component created, so you cant override its value with initial value of definition.
  const [activeMovie, setActiveMovie] = useState(
    data.find((movie) => movie.date === year)
  );
  const { title, body, rate, tags } = activeMovie;

  // useEffect(() => {
  //   setActiveMovie(data.find((movie) => movie.date === year));
  // }, [year, data]);

  // console.log(year);
  // console.log(activeMovie);
  if (activeMovie.date !== year) {
    setActiveMovie(data.find((movie) => movie.date === year));
  }

  return (
    <div className="col-12 col-sm-9 tab-content" id="v-pills-tabContent">
      <div>
        <h3>{title}</h3>
        <span className="texts">{body}</span>
      </div>
      <article className="d-flex align-items-center">
        <div className="d-flex ">
          <span className="text-danger p-1 rounded-3">{tags.join(" / ")}</span>
        </div>
      </article>
      <article className="d-flex align-items-center">
        <div className="d-flex mx-1 align-items-center">
          <div
            className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
            style={{ fontSize: "1.8rem" }}
          >
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={5 * (rate / 10)}
              editing={true}
            />
          </div>
          <div
            className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
            style={{ fontSize: "1.4rem" }}
          >
            {`${rate.toFixed(2)} / 10`}
          </div>
        </div>
      </article>
    </div>
  );
};

export default FilmInfo;
