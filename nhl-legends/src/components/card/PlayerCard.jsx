import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      onClick={() => {
        setShowImage(!showImage);
      }}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-image" />
      ) : (
        <ul className="m-auto p-0">
          {statistics.map((statistic, index) => {
            return (
              <li
                key={`statistic_${index + 1}`}
                className="h5 text-start list-unstyled"
              >
                🏒 {statistic}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
