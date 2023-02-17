import HeaderStyles from "./header.module.scss";

const info = [
  "Green Cells : Evens",
  "Yellow Cells: Non-prime odds",
  "Red Cells : Prime Numbers",
];

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <h1>Number Generator</h1>
      <ul>
        {info.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </header>
  );
};

export default Header;
