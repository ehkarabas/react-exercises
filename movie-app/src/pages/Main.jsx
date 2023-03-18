import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helper/ToastNotify";

const Main = () => {
  const { getMovies, movies, loading } = useMovieContext();
  const { currentUser } = useAuthContext();
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchMovie) {
      getMovies(SEARCH_API + searchMovie);
    } else if (!currentUser) {
      toastWarnNotify("Please login to seach a movie");
      navigate("/login");
    } else {
      toastWarnNotify("Please enter a text first");
    }
  };
  return (
    <>
      <form className="flex justify-center p-2 mt-8" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>

      <div>
        <div className="flex justify-center flex-wrap">
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            movies.map((movie, index) => {
              return <MovieCard key={movie.id} {...movie} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
