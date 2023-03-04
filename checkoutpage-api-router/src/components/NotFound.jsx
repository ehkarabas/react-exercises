import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="error-background"></div>
      <div className="error-page">
        <div className="error-wrapper container-fluid d-flex flex-column justify-content-between align-items-center w-100">
          <img
            src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
            alt="not_found_image"
            className="h-100"
          />
        </div>
        <div className="container d-flex flex-column justify-content-between align-items-center text-black">
          <p className="text-center">
            The page you are looking for not available!
          </p>
          <Link to="/" className="link_404 btn btn-success">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
