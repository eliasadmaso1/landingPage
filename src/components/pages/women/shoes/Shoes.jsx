import React from 'react';
import './shoes.css';
import {womenShoes} from '../../../../data/shoes';
import Card from '../../../features/card/Card';
import { Link } from "react-router-dom";
import Footer from '../../../features/footer/Footer';


function Shoes() {
    return (
      <>
            <div className="link-container">
    <Link to="/landingPage" className="back-link">
        <div className="back-home">חזרה לבית</div>
      </Link>
    </div>
        <div className="shoes">
        {womenShoes.map((shoe) => {
          return (
         
              <div className="card-container">
                <Card name={shoe.name} img={shoe.img} price={shoe.price} sizes={shoe.sizes}/>
              </div>
         
          );
        })}
      </div>
      <Footer/>
      </>
    )
}

export default Shoes
