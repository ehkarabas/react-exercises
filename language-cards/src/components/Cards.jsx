import { useState } from "react";
import { Card } from "react-bootstrap";
import CardsStyle from "../scss/componentStyles/cards.module.scss";

const Cards = ({ name, options: { field, year, developer }, src }) => {
  const [flip, setFlip] = useState(false);
  return (
    <Card
      className={CardsStyle.card}
      role="button"
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <Card.Body className={CardsStyle.card__body}>
        {flip ? (
          <ul className={CardsStyle.card__body_infos}>
            <li>{field}</li>
            <li>{year}</li>
            <li>{developer}</li>
          </ul>
        ) : (
          <Card.Img src={src} className={CardsStyle.card__body_img} />
        )}
      </Card.Body>
      <Card.Footer className="border-top-0 text-center bg-transparent">
        <Card.Title className={CardsStyle.card__footer_title}>
          {name}
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
