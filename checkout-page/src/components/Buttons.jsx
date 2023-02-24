import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ count, countChange, index, removeHandler, items }) => {
  return (
    <>
      <div className="quantity-controller bg-white d-flex justify-content-center align-items-center border border-1 border-dark p-2 shadow-sm">
        <Button
          className="btn-secondary"
          onClick={() => {
            if (count < 25) {
              countChange(count + 1);
            } else {
              alert("Maximum 25 pieces allowed in an order.");
            }
          }}
        >
          +
        </Button>
        <span className="mx-4">{count}</span>
        <Button
          className="btn-secondary"
          onClick={() => {
            if (count > 1) countChange(count - 1);
            else removeHandler(index);
          }}
        >
          -
        </Button>
      </div>
      <div className="product-removal mt-4">
        <Button
          className="btn-danger w-100 remove-product"
          onClick={() => {
            removeHandler(index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="me-2" />
          Remove
        </Button>
      </div>
    </>
  );
};

export default Buttons;
