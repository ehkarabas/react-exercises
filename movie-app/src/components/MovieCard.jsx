import { useNavigate } from "react-router-dom";
import FavIcon from "../assets/icons/FavIcon";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const { addToFavorites, favorites } = useMovieContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const isFavorite = favorites.some((item) => item.id === id);

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div
      className="movie"
      onClick={() => {
        navigate("/details/" + id);
        !currentUser && toastWarnNotify("Please log in to see details");
      }}
    >
      <FavIcon
        className="absolute bottom-20 right-2 w-6 h-6 hover:scale-110 text-amber-100"
        onClick={(e) => {
          e.stopPropagation();
          addToFavorites({ title, poster_path, overview, vote_average, id });
          isFavorite
            ? toastSuccessNotify(
                "The movie has been removed from your favorites successfully."
              )
            : toastSuccessNotify(
                "The movie has been added to your favorites successfully."
              );
        }}
        isFavorite={isFavorite}
      />
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
