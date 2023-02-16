import CardStyle from "../../scss/cards.module.scss";

function Card({ cityName, info, img }) {
  // console.log(props);
  // className="col-sm-6 col-lg-4 col-xl-3"
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3 p-0">
      <div className={CardStyle["flex"]}>
        <div className={CardStyle["card"]}>
          <h1>{cityName}</h1>
          <div className={CardStyle["card-img"]}>
            <img src={img} alt="card visual" />
            <div className={CardStyle["card-overlay"]}></div>
          </div>
          <div className={CardStyle["card-info"]}>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
