


import React from "react";
import { Routes, Route } from "react-router-dom";
import Offerline from "./Components/Offerline";
import Home from "./Pages/Home";
import Category from "./Components/Category";
import Productdetail from "./Components/Productdetail";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
import Personalization from "./Pages/Personalization";
import Corporate from "./Pages/Corporate";
import Gifting from "./Pages/Gifting";
import Login from "./Pages/Login";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Offerline />
    <Navbar/>
      <Routes>
        <Route path="/cat" element={<Categories/>}/>
        <Route path="/personalisation" element={<Personalization/>}/>
        <Route path="/corporate-orders" element={<Corporate/>}/>
        <Route path="/gifting-store" element={<Gifting/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<Productdetail />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}