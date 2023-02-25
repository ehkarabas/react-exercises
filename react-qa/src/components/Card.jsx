import React from "react";

const Card = ({ id, question, answer, icon, handleShow }) => {
  return (
    <div className="card">
      <div className="ques-answer">
        <h5>
          {id}.{question}
        </h5>
        <button onClick={handleShow}>{icon}</button>
      </div>
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default Card;
