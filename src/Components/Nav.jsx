import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  category = [...new Set(category)];
  // console.log(category);

  const color = () => {
    return `rgb(${Math.floor(Math.random() * 255).toFixed()},
 ${(Math.random() * 255).toFixed()},0.1) `;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 pt-5 flex items-center flex-col">
      <Link
        className="py-2 px-5 border rounded border-blue-300 text-blue-400"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl "> Category Filter</h1>

      <div className="w-[80%] mt-2">
        {category.map(( cat, i) => (
          <Link 
          to = {`/?category=${cat}`}
            key={i}
            className="mb-3 flex items-center">

            <span
              style={{ backgroundColor: color() }}
              className="w-[15px] h-[15px] rounded-full mr-2"
            ></span>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
