import React from "react";
import "./LessonCard.css";

const LessonCard = ({ nameNested, ageNested, imageNested }) => {
  return (
    <div className="cardDiv">
      <img src={imageNested} alt="" />
      <div className="infoDiv">
        <h3>
          Lesson Name: <span>{nameNested}</span>
        </h3>
        <h3>
          Lesson Hour: <span>{ageNested}</span>
        </h3>
      </div>
    </div>
  );
};

export default LessonCard;
