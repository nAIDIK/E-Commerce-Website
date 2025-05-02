import React from 'react'

const Edit = () => {
  return (
<>
<form className="w-full h-full flex flex-col items-center justify-center gap-5  ">
        <h1 className="text-4xl"> Edit your product</h1>
        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="URL"
          placeholder="Enter your image url here"
          required
        />
        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="text"
          placeholder="Enter your title  "
          required
        />
        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="text"
          placeholder="Enter your category "
          required
        />
        <input
          className="h-10 w-1/2  p-2 border  rounded"
          type="number"
          placeholder="Enter your price"
          required
        />
        <textarea
          className="h-10 w-1/2  p-2 border  rounded"
          placeholder="Enter your description"
          required
        ></textarea>
        <button
          className="py-2 px-5  rounded -blue-300 border border-blue-300 text-pink-400"
          to="/create"
        >Confirm</button>
      </form>
</>
  )
}

export default Edit;