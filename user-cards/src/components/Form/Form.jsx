import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  gap: "1rem",
};

const inputStyle = {
  padding: "0.1rem 0.5rem",
  width: "120px",
};

const Form = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(parseInt(e.target[0].value));
    e.target.reset();
    e.target[0].blur();
  };
  const changeHandler = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
    if (/[^\d]/g.test(inputValue)) {
      setIsValid(false);
      e.target.parentNode.reset();
      alert("Only numbers allowed, try again.");
    } else if (parseInt(inputValue) > 100) {
      e.target.parentNode.reset();
      alert("0-100 alowed,try again.");
    } else {
      setText(inputValue);
      setIsValid(true);
    }
  };

  useEffect(() => {
    if (isValid) {
      setText(text);
    }
  }, [isValid, text]);

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Cards To Display"
          style={inputStyle}
          onChange={changeHandler}
        />
        <p>Displaying {value} users now.</p>
      </form>
      <Cards usersCount={value} />
    </>
  );
};

export default Form;
