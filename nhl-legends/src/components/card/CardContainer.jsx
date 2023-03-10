import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../../helpers/data-nhl";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Form.Control
        placeholder="Search player..."
        className="w-50 m-auto input-area"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player, index) => {
              return player.name
                .toLowerCase()
                .includes(search.trim().toLowerCase());
            })
            .map((player, index) => {
              return (
                <Col md={6} lg={4} xl={3} key={`player_${index}`}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
