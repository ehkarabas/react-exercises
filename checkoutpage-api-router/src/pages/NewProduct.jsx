import axios from "axios";
import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

const initialState = {
  name: "",
  image: "",
  price: 1,
  dampingRate: 0.8,
  amount: 1,
};

const NewProduct = () => {
  const [formData, setFormData] = useState(initialState);
  const url = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    if (e.target.id === "price") {
      if (e.target.value >= 100000) {
        alert("Allowed maximum price is 100.000, try with lower prices.");
        setFormData({ ...formData, price: 1 });
        e.target.value = "";
      }
    }
    if (e.target.id === "amount") {
      if (e.target.value >= 25) {
        alert("Allowed maximum quantity is 25, try with lower amount.");
        setFormData({ ...formData, amount: 1 });
        e.target.value = "";
      }
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log({ [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData);
      setFormData(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="New"
      />
    </div>
  );
};

export default NewProduct;
