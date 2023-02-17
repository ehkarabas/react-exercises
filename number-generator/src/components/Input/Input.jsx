import InputStyle from "./input.module.scss";
import React, { useState } from "react";
import Generation from "../Generation/Generation";

let inputVal;

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("Input field cannot be empty, input an end limit from 5 to 100.");
      event.currentTarget.reset();
    } else if (!/^\d+$/.test(inputValue)) {
      alert("Type only integers, input an end limit from 5 to 100.");
      event.currentTarget.reset();
    } else if (inputValue < 5 || inputValue > 100) {
      alert("Input an end limit from 5 to 100.");
      event.currentTarget.reset();
    } else {
      inputVal = inputValue;
      console.log(inputValue);
    }
    setInputValue("");
    // event.target.reset();
    event.target.elements[0].blur(); // removing focus after an input
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className={InputStyle.inputField}>
        <input
          type="text"
          value={inputValue}
          placeholder="Input an end limit(5-100)"
          onChange={handleChange}
        />
      </form>
      {inputVal && <p>Range : {inputVal}</p>}
      <Generation range={inputVal} />
    </React.Fragment>
  );
};

export default Input;
