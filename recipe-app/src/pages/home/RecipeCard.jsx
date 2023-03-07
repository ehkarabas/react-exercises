import { useNavigate } from "react-router-dom";
import Image from "../../components/styled/Image.styled";
import "./homeStyle.scss";

const RecipeCard = ({ recipe: { image, label }, recipe }) => {
  const navigate = useNavigate();
  // console.log(label);
  return (
    <div className="col-sm6 col-md-4 col-lg-3">
      <div className="recipe-card bg-success bg-opacity-25 p-3 d-flex flex-column justify-content-between gap-3 rounded-4 text-light border border-2 border-info">
        <img src={image} alt="recipe_image" className="img-thumbnail" />
        <h5>{label}</h5>
        <button
          className="btn btn-info"
          onClick={() => {
            navigate(
              `/details/${label.trim().replaceAll(" ", "_").toLowerCase()}`,
              {
                state: recipe,
              }
            );
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
