import React, { useState } from "react";
import FilmYear from "../components/FilmYear";
import FilmInfo from "../components/FilmInfo";
import { data } from "../helper/data.js";

const Main = () => {
  const [year, setYear] = useState(data[0].date);
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear year={year} setYear={setYear} data={data} />
      <FilmInfo data={data} year={year} />
    </div>
  );
};

export default Main;
