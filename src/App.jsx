import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import About from "./Components/About";    
import ContactPage from "./Components/ContactPage";
import SlotPropsSignIn from "./Components/SlotPropsSignIn"
import Login from "./Components/Login"




const App = () => {
  return (
    <>
    <Header/>
    <div className="h-screen w-full flex">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/signup" element={<SlotPropsSignIn />}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div> 
    <Footer/>
    </>
  );
};


export default App;