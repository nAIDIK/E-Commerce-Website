import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import{ProductContext} from "../Utils/Context"

const Nav = () => {

const [products] = useContext (ProductContext);


let category =
products && products.reduce((acc, cv) =>[...acc, cv.category] ,[]);
category = [...new Set(
  category
)];
console.log(category);



  return (
    <nav className="w-[15%] h-full bg-zinc-100 pt-5 flex items-center flex-col">
      <Link
        className="py-2 px-5 border rounded border-blue-300 text-blue-400"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl text-cyan-300 "> Category Filter</h1>

      <div className="w-[80%] mt-2">
      {category.map((cat  ) => (
        <Link 
        className="mb-3 flex items-center">
        <span className="w-[15px] h-[15px] bg-blue-200 rounded-full mr-2"></span>
        {cat}
      </Link>
      ))}
        
      </div>
    </nav>
  );
};

export default Nav;