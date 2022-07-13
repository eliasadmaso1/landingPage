import React from 'react';
import './shirts.css';
import Card from '../../../features/card/Card';
import { menShirts } from '../../../../data/shirts';
import Footer from '../../../features/footer/Footer';
import { Link } from "react-router-dom";




function Shirts() {
    return (
      <>
         <div className="link-container">
    <Link to="/landingPage" className="back-link">
        <div className="back-home">חזרה לבית</div>
      </Link>
    </div>
        <div className="shirts">
        {menShirts.map((shirt) => {
          return (
        
              <div className="card-container">
                <Card name={shirt.name} img={shirt.img} price={shirt.price} sizes={shirt.sizes}/>
              </div>
       
          );
        })}
      </div>
      <Footer/>
      </>
    )
}

export default Shirts
