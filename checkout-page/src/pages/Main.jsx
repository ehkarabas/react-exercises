import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import data from "../helper/data";

const Main = () => {
  const [add, setAdd] = useState({ showAdd: true, initial: true });
  const [productList, setProductList] = useState(data);
  const [productsTotal, setProductsTotal] = useState(0);
  const [shipping, setShipping] = useState(25);

  useEffect(() => {
    if (!add.initial) {
      console.log("useEffect");
      if (!add.showAdd) {
        document
          .querySelector(".product-cards-col")
          .setAttribute("style", "margin:2rem auto 0 auto !important");
      }
    }
  }, [add.showAdd, add.initial]);

  useEffect(() => {
    console.log("calculating");
    const total = productList.reduce(
      (acc, item) => acc + item.price * item.amount * item.dampingRate,
      0
    );
    setProductsTotal(total);
    const itemsCount = productList
      .map((item) => item.amount)
      .reduce((acc, curr) => (acc += curr), 0);
    setShipping(25 * Math.ceil(itemsCount / 5));
  }, [productList]);

  const handleShowChangeOnChild = (toggle, first = false) => {
    setAdd({ ...add, showAdd: toggle, initial: first });
  };

  const handleRemove = (index) => {
    const newProductList = JSON.parse(JSON.stringify(productList));
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const handleProductsTotal = (newData) => {
    setProductsTotal(newData);
  };

  return (
    <>
      <Header />
      <main className="main-container d-flex justify-content-center container">
        <section
          className={
            add.showAdd
              ? "cols-wrapper d-block d-xl-flex w-100"
              : "cols-wrapper w-100"
          }
        >
          {add.showAdd ? (
            <Col md={5} className="add-product-col m-auto">
              <AddProduct
                show={add}
                showChange={handleShowChangeOnChild}
                items={productList}
                handleItems={setProductList}
              />
            </Col>
          ) : (
            <section className="d-flex justify-content-center">
              <button
                className="btn btn-warning"
                onClick={() => {
                  setAdd({ ...add, showAdd: true });
                }}
              >
                Show Product Bar
              </button>
            </section>
          )}
          <Col
            md={7}
            className="product-cards-col m-auto"
            style={
              add.showAdd ? { margin: "auto" } : { margin: "2rem auto 0 auto" }
            }
          >
            <article id="product-panel">
              {productList.map((item, index) => (
                <ProductCard
                  {...item}
                  key={`product_${index + 1}`}
                  index={index}
                  removeHandler={handleRemove}
                  items={productList}
                  handleItems={setProductList}
                  handleProductsTotal={handleProductsTotal}
                />
              ))}
            </article>
            <CardTotal productsTotal={productsTotal} shipping={shipping} />
          </Col>
        </section>
      </main>
    </>
  );
};

export default Main;
