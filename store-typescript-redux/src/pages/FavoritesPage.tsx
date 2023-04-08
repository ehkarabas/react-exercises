import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { Product, VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleRemove: VoidFunc = (product) => {
    const newData = favorites.filter((item) => item.id !== product.id);
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Product has been removed from favorites.");
  };

  console.log(favorites);
  return (
    <div>
      <h1 className="font-bold text-2xl text-white text-center m-3">
        My Favorites Products
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-0 xs:p-5">
        {favorites.map((product) => (
          <Card
            key={product.id}
            text="Remove favorites"
            product={product}
            handleFunc={handleRemove}
          />
        ))}
        {favorites.length === 0 && (
          <h3 className="font-bold text-2xl text-red-500 text-center mt-10">
            No favorites..
          </h3>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
