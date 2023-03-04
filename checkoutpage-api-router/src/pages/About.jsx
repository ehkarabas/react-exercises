import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-center m-5">About</h1>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <img src="./images/ehlogo-transparent.png" alt="logo" width="50px" />
          <h2 className="text-dark">
            Cool<span className="text-info">Dev</span>
          </h2>
        </div>
        <p>&copy; CoolDev {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default About;
