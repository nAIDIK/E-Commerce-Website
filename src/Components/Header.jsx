import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between items-center bg-slate-600 text-white p-4">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Header;
