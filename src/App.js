import "./App.css";
import Footer from "./components/features/footer/Footer";
import ContentSlider from "./components/features/contentSlider/ContentSlider";
import MenShoes from "./components/pages/mens/shoes/Shoes";
import { sliderData } from "./data/slider";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Shirts from "./components/pages/mens/shirts/Shirts";
import ImageSlider from "./components/features/imageSlider/ImageSlider";
import { shirts, womenPants } from "./data/shirts";
import Mens from "./components/pages/mens/page/Mens";
import WomenShoes from "./components/pages/women/shoes/Shoes";
import Women from "./components/pages/women/page/Women";
import Pants from "./components/pages/women/pants/Pants";

function App() {
  return (
    <BrowserRouter>
      <ContentSlider slides={sliderData} />
      <Navbar />
      <Routes>
        <Route exact path="/landingPage" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/menShoes" element={<MenShoes />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/womenShoes" element={<WomenShoes />} />
        <Route path="/women" element={<Women />} />
        <Route path="/womenPants" element={<Pants />} />




      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
