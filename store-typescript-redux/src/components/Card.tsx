import React from "react";
import { Product } from "../models/models";

interface ICardProps {
  product: Product;
  text: string;
  handleFunc(item: Product): void;
}

const Card: React.FC<ICardProps> = ({ product, text, handleFunc }) => {
  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col justify-between bg-white rounded-lg">
      <div className="p-4 text-start">
        <h1 className="text-gray-900 uppercase text-xl line-clamp-1 hover:line-clamp-none">
          {product.title}
        </h1>
        <p className="text-sm mt-1 text-gray-500 line-clamp-1 hover:line-clamp-none">
          {product.description}
        </p>
      </div>
      <img
        className="p-2 h-[150px] object-contain"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="flex justify-between items-center p-3 rounded-b-lg bg-gray-800">
        <h2 className="text-gray-100 font-bold">${product.price}</h2>
        <button
          className={`${
            text === "Add to favorites" ? "bg-gray-300" : "bg-red-300"
          } p-1 rounded-lg animate-pulse hover:animate-none`}
          onClick={() => {
            handleFunc(product);
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Card;
