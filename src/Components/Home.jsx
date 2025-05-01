import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";

const Home = () => {
  const [products] = useContext(ProductContext);

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <>  
        <Nav />
        <div className="h-full w-[85%] p-10 pt-[5%] flex justify-center items-center">
          <h2 className="text-2xl font-semibold animate-pulse">Loading Products...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((product) => (
          
          <Link
            to={`/details/${product.id}`}
            key={product.id}
            className="card w-[18%] h-[40vh] mr-3 mb-3 p-3 border shadow rounded flex flex-col justify-center items-center hover:shadow-lg transition-transform duration-200 hover:scale-105"
          >
            <div
              className="image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <h1 className="text-center font-medium hover:text-blue-400">{product.title}</h1>
          </Link>

        ))}
      </div>
    </>
  );
};

export default Home;