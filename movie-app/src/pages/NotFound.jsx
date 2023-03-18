import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-auto h-[50vh] overflow-hidden">
        <img
          className="h-full"
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt="not_found_image"
        />
      </div>
      <div className="flex flex-col justify-between items-center text-black">
        <p className="text-center">
          The page you are looking for not available!
        </p>
        <Link to="/" className="btn-success w-fit">
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
