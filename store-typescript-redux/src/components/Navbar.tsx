import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 bg-gradient-to-b from-cyan-600 to-gray-800 sticky top-0 left-0 right-0 z-10 ">
      <Link to="/" className="block">
        <h3 className="font-bold italic text-2xl text-white">
          Cool<span className="text-cyan-300 ">Store</span>
        </h3>
      </Link>
      <div className="h-16 text-white  flex justify-center items-center pt-1 gap-2">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
