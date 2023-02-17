import Box from "../Box/Box";
import GenerationStyle from "./generation.module.scss";

const isPrime = (num) => {
  if (num < 2) return false;
  else if (num === 2) return true;
  else {
    let check;
    for (let i = 2; i < num; i++) {
      if (!(num % i)) {
        check = false;
      }
    }
    if (check !== false) {
      return true;
    } else {
      return false;
    }
  }
};

function Generation({ range }) {
  console.log(range);
  const numbers = Array.from({ length: range }, (x, i) => i);
  return (
    <div className={GenerationStyle.generation}>
      <div className={GenerationStyle.boxesWrapper}>
        {numbers.map((count) => {
          let bgColor;
          count % 2 ? (bgColor = "yellow") : (bgColor = "green");
          if (isPrime(count)) bgColor = "red";
          return <Box number={count} bgColor={bgColor} />;
        })}
      </div>
    </div>
  );
}

export default Generation;
