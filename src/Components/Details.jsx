import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="container w-[70%] h-screen m-auto p-[10%] flex items-center justify-between gap-10">
      <img
        className="h-[80%] w-[40%] object-contain"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Backpack"
      />
      <div>
        <h1 className="text-2xl font-semibold mb-2">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className="text-zinc-500 my-2">Men's Clothing</h3>
        <h2 className="text-red-500 font-medium mb-2">$ 109.95</h2>
        <p className="text-gray-800 mb-4">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <div className="flex gap-4">
            <Link to="/edit" className="px-4 py-1 border border-blue-600 rounded hover:bg-blue-100">Edit</Link>
            <Link to="/" className="px-4 py-1 border border-red-600 rounded hover:bg-red-100">Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;