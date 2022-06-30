import './App.css';
import Footer from './components/features/footer/Footer';
import ImageSlider from './components/features/imageSlider/ImageSlider';
import Shoe from './components/pages/shoe/Shoe';
import Shoes from './components/pages/shoes/Shoes';
import { sliderData } from './data/slider';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/features/navbar/Navbar';
import Home from './components/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
        <ImageSlider slides={sliderData}/>
        <Navbar/>
        <Routes>
        <Route exact path="/landingPage" element={<Home />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route  path="/landingPage/shoe/:id" element={<Shoe />} />



        </Routes>
        <Footer/>


   
  </BrowserRouter>
 
  
    
    
  );
}

export default App;
