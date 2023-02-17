import BoxStyle from "./box.module.scss";
import variables from "../../scss/_variables.scss";

console.log(variables.green);

const Box = ({ number, bgColor }) => {
  console.log(number, bgColor);
  const color = variables[`${bgColor}`];
  return (
    <div className={BoxStyle.box} style={{ backgroundColor: color }}>
      {number}
    </div>
  );
};

export default Box;
