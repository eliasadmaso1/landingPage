import "./App.css";
import React, { useState } from "react";
import Footer from "./components/features/footer/Footer";
import ContentSlider from "./components/features/contentSlider/ContentSlider";
import MenShoes from "./components/pages/mens/shoes/Shoes";
import { sliderData } from "./data/slider";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/navbar/Navbar";
import Home from "./components/pages/home/Home";
import MenShirts from "./components/pages/mens/shirts/Shirts";
import ImageSlider from "./components/features/imageSlider/ImageSlider";
import { shirts, womenPants } from "./data/shirts";
import WomenShoes from "./components/pages/women/shoes/Shoes";
import Pants from "./components/pages/women/pants/Pants";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function App() {


  return (
    <BrowserRouter>
      <ContentSlider slides={sliderData} />
      <Routes>
        <Route exact path="/landingPage" element={<Home />} />
        <Route path="/menShoes" element={<MenShoes />} />
        <Route path="menShirts" element={<MenShirts />} />
        <Route path="/womenShoes" element={<WomenShoes />} />
        <Route path="/womenPants" element={<Pants />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
