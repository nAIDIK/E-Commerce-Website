import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 pt-5 flex items-center flex-col">
      <Link
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl">Category Filter</h1>
      <ul className="w-[80%] mt-2">
        <li className="mb-3 flex items-center"> <span className="w-[15px] h-[15px] bg-blue-100 rounded-full mr-2"></span> Cat1</li>
        <li className="mb-3 flex items-center"> <span className="w-[15px] h-[15px] bg-red-100 rounded-full mr-2"></span> Cat1</li>
        <li className="mb-3 flex items-center"> <span className="w-[15px] h-[15px] bg-green-100 rounded-full mr-2"></span> Cat1</li>
      </ul>
    </nav>
  );
};

export default Nav;
