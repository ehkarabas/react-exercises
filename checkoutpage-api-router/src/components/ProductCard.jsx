import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({
  item: { name, image, price, dampingRate, amount, id },
  item,
  getProducts,
}) => {
  // console.log(name, image, price, dampingRate, amount, id);
  const url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleMinus = async () => {
    if (amount === 1) {
      handleRemove();
    } else {
      try {
        await axios.put(`${url}/${id}`, { ...item, amount: amount - 1 });
      } catch (error) {
        console.log(
          `${error.response.status} ${error.response.statusText} : ${error.message}`
        );
      }
      getProducts();
    }
  };

  const handlePlus = async () => {
    try {
      const newAmount = Number(amount) + 1;
      await axios.put(`${url}/${id}`, { ...item, amount: newAmount });
      if (newAmount === 25) {
        alert("Max quantity limit is 25 for the same product in one order.");
      }
    } catch (error) {
      console.log(
        `${error.response.status} ${error.response.statusText} : ${error.message}`
      );
    }
    getProducts();
  };

  const handleRemove = async () => {
    if (window.confirm("Item will be removed from the list, are you sure?")) {
      try {
        await axios.delete(`${url}/${id}`);
      } catch (error) {
        console.log(
          `${error.response.status} ${error.response.statusText} : ${error.message}`
        );
      }
      getProducts();
    }
  };

  const editProduct = () => {
    navigate(`/product-list/${item.name.trim().replaceAll(" ", "-")}`, {
      state: [item, getProducts],
    });
  };

  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
            onError={(e) =>
              (e.currentTarget.src =
                "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png")
            }
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button" onClick={editProduct}>
              {name}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                $
                <span className="damping-price">
                  {(price * dampingRate).toFixed(2)}
                </span>
                <span className="h5 text-dark text-decoration-line-through">
                  {parseFloat(price).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleMinus}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handlePlus}
                  disabled={amount >= 25 ? true : false}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleRemove}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $
              <span className="product-line-price">
                {(price * dampingRate * amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
