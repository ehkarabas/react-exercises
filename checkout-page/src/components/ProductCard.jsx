import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Buttons from "./Buttons";

const ProductCard = ({
  id,
  name,
  image,
  price,
  dampingRate,
  amount,
  index,
  removeHandler,
  items,
  handleItems,
}) => {
  const [count, setCount] = useState(amount);

  const handleCountChangeOnChild = (newVal) => {
    setCount(newVal);
    // ? partial deep copy ancak productList ancak setter ile degistirilebilir
    const newProductList = [...items];
    newProductList[index].amount = newVal;
    handleItems(newProductList);
  };

  return (
    <Card className="shadow-lg mb-3">
      <Row className="g-0">
        <Col md={5}>
          <Card.Img
            src={image}
            alt=""
            className="h-100 w-100"
            onError={(e) => {
              e.currentTarget.src =
                "https://media.istockphoto.com/id/1399859917/tr/vekt%C3%B6r/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=170667a&w=0&k=20&c=Xcoo8bYotJkfxM5jvIg40KmTdFyyswK1JgnaQPwFiB8=";
            }}
          />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title className="h5">{name}</Card.Title>
            <Card.Subtitle className="product-price">
              <p className="text-warning h2">
                &#36;
                <span className="damping-price">
                  {(price * dampingRate).toFixed(2)}
                </span>
                <span className="h5 text-dark text-decoration-line-through">
                  {price}
                </span>
              </p>
            </Card.Subtitle>
            <Buttons
              count={count}
              countChange={handleCountChangeOnChild}
              index={index}
              removeHandler={removeHandler}
              items={items}
            />
            <div className="product-total-wrapper mt-2">
              Product Total : &#36;
              <span className="product-line-price">
                {(price * dampingRate * count).toFixed(2)}
              </span>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
