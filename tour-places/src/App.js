import AppStyle from "./scss/app.module.scss";
import MainStyle from "./scss/app.scss";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import { data } from "./helper/data";

// row gx-5 gy-3

function App() {
  return (
    <main className="App">
      <Header />
      <article className={AppStyle["cards-wrapper"]}>
        <div className={"row gy-5 p-0 m-0"}>
          {data.map(({ id, title, desc, image }) => {
            return <Card id={id} cityName={title} info={desc} img={image} />;
          })}
        </div>
      </article>
    </main>
  );
}

export default App;
