import React, { useState } from "react";


const Create = () => {
  const [ image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

const submitHandler =(e) => {
e.preventDefault();
const newProduct ={
  image,
  title,
  category,
  price,
  description,
}
console.log(newProduct);
};


const changeImage =(e) => {
  setImage(e.target.value);
  console.log(image);
};

const changeTitle =(e) => {
  setTitle(e.target.value);
  console.log(title);
};

const changeCategory =(e) => {
  setCategory(e.target.value);
  console.log(category);
};

const changePrice =(e) => {
  setPrice(e.target.value);
  console.log(price);
};

const changeDescription =(e) => {
  setDescription(e.target.value);
  console.log(description);
};

  return (
    <>
      <form
      onSubmit={submitHandler}
       className="w-full h-full flex flex-col items-center justify-center gap-5  ">
        <h1 className="text-4xl">Add New Product</h1>
        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="URL"
          placeholder="Enter your image url here"
          required
          onChange={changeImage}
        />

        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="text"
          placeholder="Enter your title  "
          required
          onChange={changeTitle}
        />

        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="text"
          placeholder="Enter your category "
          required
          onChange={changeCategory}
        />

        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="number"
          placeholder="Enter your price"
          required
          onChange={changePrice}
        />

        <textarea
          className="h-10 w-1/2  p-2 border  rounded"
          placeholder="Enter your description"
          required
          onChange={changeDescription}

        ></textarea>
        <button
          className="py-2 px-5  rounded -blue-300 border border-blue-300 text-blue-400"
          to="/create"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
