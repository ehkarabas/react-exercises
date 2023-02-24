import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

const AddProduct = ({ show: { showAdd }, showChange, items, handleItems }) => {
  const [addProduct, setAddProduct] = useState({
    id: 0,
    name: "",
    image: "",
    price: 0,
    dampingRate: 0.8,
    amount: 0,
  });

  const handleToggle = () => {
    showChange(!showAdd);
  };

  return (
    <>
      <Button
        className="btn btn-warning"
        onClick={() => {
          handleToggle();
        }}
      >
        Hide Product Bar
      </Button>
      <article id="add-product">
        <Form
          className="p-2"
          onSubmit={(e) => {
            e.preventDefault();
            const newItems = [...items];
            newItems.push(addProduct);
            handleItems(newItems);
            e.currentTarget.reset();
          }}
        >
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                setAddProduct({
                  ...addProduct,
                  id: items.length + 1,
                  name: e.target.value,
                });
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              min="0"
              onChange={(e) => {
                setAddProduct({ ...addProduct, price: e.target.value });
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              min="0"
              max="25"
              onChange={(e) => {
                if (e.target.value > 25) {
                  alert("Maximum 25 pieces allowed in an order.");
                  e.target.value = "";
                  e.target.blur();
                }
                setAddProduct({ ...addProduct, amount: +e.target.value });
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductImage">
            <Form.Label>Product Image</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3" className="url-label-wide">
                https://example.com/
              </InputGroup.Text>
              <InputGroup.Text
                id="basic-addon3"
                className="url-label-narrow"
                style={{ display: "none" }}
              >
                url
              </InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon3"
                type="url"
                onChange={(e) => {
                  setAddProduct({ ...addProduct, image: e.target.value });
                }}
                required
              />
            </InputGroup>
          </Form.Group>
          <div className="text-center">
            <Button
              type="submit"
              className="add-to-cart btn btn-success text-center"
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                className="me-2"
              ></FontAwesomeIcon>{" "}
              Add To Cart
            </Button>
          </div>
        </Form>
      </article>
    </>
  );
};

export default AddProduct;
