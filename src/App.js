import "./App.css";
import Footer from "./components/features/footer/Footer";
import ContentSlider from "./components/features/contentSlider/ContentSlider";
import Shoes from "./components/pages/mens/shoes/Shoes";
import { sliderData } from "./data/slider";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Shirts from "./components/pages/mens/shirts/Shirts";
import ImageSlider from "./components/features/imageSlider/ImageSlider";
import { shirts } from "./data/shirts";
import Mens from "./components/pages/mens/page/Mens";

function App() {
  return (
    <BrowserRouter>
      <ContentSlider slides={sliderData} />
      <Navbar />
      <Routes>
        <Route exact path="/landingPage" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/menShoes" element={<Shoes />} />
        <Route path="/shirts" element={<Shirts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
