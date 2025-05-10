import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading"
import Create from "./Create";
import { useContext } from "react";
import { ProductContext } from "../Utils/Context";


const Details = () => { 

const [ product , setProduct ] = useState( JSON.parse(localStorage.getItem("products")) || null);

const [products, setProducts] = useContext (ProductContext);

const navigate = useNavigate();

const {id} =useParams();

const getSingleProduct = async () =>{
  try {
    const { data } = await axios.get (`/products/${id}`);
    // console.log(data);
    setProduct(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

useEffect (() =>{
 getSingleProduct();
if (!product){
  setProduct(product.filter((item) => item.id !== id)[0]);
}
},[]);


const handleDelete = (id) =>{
  const filteredProducts =  product.filter((item) => item.id !== id);
  setProducts(products);
  localStorage.setItem ("product",JSON.stringify(filteredProducts));
  navigate("/")
}

  return product ? (
    <div className="container w-[70%] h-screen m-auto p-[10%] flex items-center justify-between gap-10">
      <img
        className="h-[80%] w-[40%] object-contain"
        src= {`${product.image}`}
        alt="img"
      />
      <div>
        <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
        <h3 className="text-zinc-500 my-2">{product.category}</h3>
        <h2 className="text-red-500 font-medium mb-2">{product.price}</h2>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <div className="flex gap-4">
          <Link
            to="/edit"
            className="px-4 py-1 border border-blue-600 rounded hover:bg-blue-100"
          >
            Edit
          </Link>
          <button
            onClick={() =>  handleDelete(product.id)}
            className="px-4 py-1 border border-red-600 rounded hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;