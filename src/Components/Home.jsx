import React from "react";
import Nav from "./Nav";


const Home = () => {
  return (
    <>
      <Nav />
      <div className="container h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto p-10 pt-[5%]">
        
        <div className="card w-[15%] h-[30vh] flex p-3 border shadow mr-3 mb-3 flex-col justify-center items-center">
          <div
            className="image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem ipsum dolor</h1>
        </div>
        </div>
    </>
  );
};

export default Home;
