function FilmYear({ year, setYear, data }) {
  // console.log(year);

  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((movie, index) => {
          return (
            <button
              className={
                movie.date === year
                  ? "border-0 px-2 m-2 fs-4 fw-bold text-secondary activeBtn"
                  : "border-0 px-2 m-2 fs-4 fw-bold text-secondary"
              }
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={() => {
                setYear(movie.date);
              }}
              key={`button_${index + 1}`}
            >
              {movie.date}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilmYear;
