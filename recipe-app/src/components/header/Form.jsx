import { useState } from "react";

const Form = ({
  query,
  setQuery,
  mealTypes,
  mealType,
  setMealType,
  getRecipes,
}) => {
  const [showInfo, setShowInfo] = useState({
    state: false,
    info: [query, mealType],
  });
  return (
    <>
      <form
        className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setShowInfo({ state: true, info: [query, mealType] });
          getRecipes();
          setQuery("");
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.toLowerCase());
            }}
          />
        </div>
        <div className="form-group">
          <select
            className="form-select"
            id="mealType"
            value={mealType}
            onChange={(e) => {
              setMealType(e.target.value);
            }}
          >
            {mealTypes.map((item, index) => {
              return (
                <option value={item.toLowerCase()} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showInfo.state && (
        <p className="d-flex flex-column justify-content-center align-items-center gap-2 bg-light bg-opacity-25 py-2 px-3 rounded-4">
          <small>
            <i>Results for: </i>
            <span className="text-warning">{showInfo.info[0]}</span>
          </small>
          <small>
            <i>Meal type: </i>
            <span className="text-warning">{showInfo.info[1]}</span>
          </small>
        </p>
      )}
    </>
  );
};

export default Form;
