import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import Card from "./Card";

const Question = ({ id, question, answer }) => {
  console.log(id, question, answer);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    // Method 1 -> Without Card Component
    // <div className="card-group">
    //   <div className="card">
    //     <div className="ques-answer">
    //       <h5>
    //         {id}.{question}
    //       </h5>
    //       <button onClick={() => setShow(!show)}>
    //         {show ? arrowup : arrowdown}
    //       </button>
    //     </div>
    //     {show && <p>{answer}</p>}
    //   </div>
    // </div>

    // Method 2 -> With Card Component
    <div className="card-group">
      {show ? (
        <Card
          id={id}
          question={question}
          answer={answer}
          icon={arrowup}
          handleShow={handleShow}
        />
      ) : (
        <Card
          id={id}
          question={question}
          icon={arrowdown}
          handleShow={handleShow}
        />
      )}
    </div>
  );
};

export default Question;
