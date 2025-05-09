import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "axios";

const Home = () => {
  const [products] = useContext(ProductContext);

const {search} = useLocation();
const category = decodeURIComponent(search.split("=")[1]);


const [filteredProducts, setFilteredProducts ] = useState (null) ;

const getCategory = async () =>{
  try{
    const {data} = await axios.get(`/products/category/${category}`);
    setFilteredProducts(data);
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(() =>{
if (!filteredProducts || category == "undefined")
  setFilteredProducts(products);
  if (category != "undefined"){
    setFilteredProducts(products.filter((items) => items.category == category));
  }
},[category,products]);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((product) => (
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
  ) : (
    <Loading />
  )
};

export default Home;