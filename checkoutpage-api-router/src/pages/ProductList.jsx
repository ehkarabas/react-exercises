import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);
  const url = process.env.REACT_APP_API_URL;

  const getProducts = async () => {
    // console.log("getProducts function ran");
    try {
      const { data } = await axios(url);
      // console.log(data);
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
      const errorArr = [
        error.response.status,
        error.response.statusText,
        error.message,
      ];
      setErrorState(errorArr);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);
  // console.log(errorState);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {errorState ? (
          <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
            <p className="text-center text-danger w-100">{`${errorState[0]} ${errorState[1]}`}</p>
            <p className="text-center text-black w-100">{errorState[2]}</p>
          </div>
        ) : loading ? (
          <p className="text-center text-danger w-100">Loading...</p>
        ) : products.length ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    getProducts={getProducts}
                  />
                );
              })}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
