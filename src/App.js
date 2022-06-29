import './App.css';
import Footer from './components/features/footer/Footer';
import ImageSlider from './components/features/imageSlider/ImageSlider';
import Shoe from './components/pages/shoe/Shoe';
import Shoes from './components/pages/shoes/Shoes';
import { sliderData } from './data/slider';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <ImageSlider slides={sliderData}/>
        <Routes>
        <Route exact path="/" element={<Shoes />} />
        <Route exact path="/shoe" element={<Shoe />} />



        </Routes>
        <Footer/>


   
  </BrowserRouter>
 
  
    
    
  );
}

export default App;
