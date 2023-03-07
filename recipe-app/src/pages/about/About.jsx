import { Link } from "react-router-dom";
import "./aboutStyle.scss";

const About = () => {
  return (
    <>
      <div className="about-bg"></div>
      <div className="card-wrapper d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Cool<span className="text-info">Dev</span>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted font-italic">
              Developer in progress...
            </h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              earum ut dolore nostrum recusandae voluptatem, voluptatum, id
              animi ea, voluptates cum numquam hic reprehenderit quis amet ab
              similique natus assumenda fuga. Quam odit et laboriosam
              praesentium explicabo ipsa in commodi!
            </p>
            <Link to="#" className="card-link btn btn-primary">
              Cool Button
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
