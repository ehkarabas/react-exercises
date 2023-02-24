import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import data from "../helpers/languages";
import CardsContainerStyle from "../scss/componentStyles/cardsContainer.module.scss";

const CardsContainer = () => {
  return (
    <Container className={CardsContainerStyle.cardsContainer}>
      <div className="description d-flex flex-column justify-content-center align-items-center gap-3 mb-4">
        <h1>Programming Languages</h1>
        <h5 className="fst-italic">Sorted by popularity</h5>
      </div>
      <Row className="g-3">
        {data.map((pLang, index) => (
          <Col md={6} lg={4} xl={3} key={`pLang_${index}`}>
            <Cards {...pLang} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsContainer;
