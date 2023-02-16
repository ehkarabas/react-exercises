const Card = (props) => {
  // console.log("Props : ", props);
  return (
    <div className="cards">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="date">
        <h1>{props.date}</h1>
      </div>
      <img src={props.image} alt="" />
      <div className="card-over">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
