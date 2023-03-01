import "./projects.scss";
import { imageData } from "../../helper/imageData";

const Projects = () => {
  return (
    <>
      <div className="background"></div>
      <div className="projects-title d-flex justify-content-center align-items-end">
        <h1 className="display-3 fw-bold text-center mb-4">Projects</h1>
      </div>
      <div className="projects container-fluid px-0">
        <div className="row projects_layout g-3">
          {imageData.map(({ image }, index) => {
            return (
              <div
                className="col-lg-6 col-xl-4 projects_layout_project p-0"
                key={index + 1}
              >
                <img
                  src={image}
                  alt="project"
                  className="projects_layout_project_image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
