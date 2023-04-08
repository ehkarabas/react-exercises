import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { EventFunc, Product, Products } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const Home = () => {
  // const [search, setSearch] = useState<string>("");
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("Product has been added to favorites.");
    } else {
      toastWarnNotify("Product is in favorites already.");
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <SearchComp handleChange={handleChange} />

      {/* {loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Products loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )} */}
      {/* 
      if (loading) {
        if (error) {
          ....
        } else {
          ...
        }
      } else {
        return products
      }
      */}
      {loading ? (
        <div>
          <p className="text-center text-red-600">Products loading...</p>
        </div>
      ) : error ? (
        <div>
          <p className="text-center text-red-600">Something went wrong...</p>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 px-0 py-5 xs:p-5">
          {productsList.map((product) => (
            <Card
              key={product.id}
              text={
                favorites.filter((item) => item.id === product.id).length
                  ? "In Favorites"
                  : "Add to favorites"
              }
              product={product}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
