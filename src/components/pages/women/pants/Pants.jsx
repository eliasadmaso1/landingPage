import React from 'react';
import { womenPants } from '../../../../data/shirts';
import Card from '../../../features/card/Card';
import { Link } from "react-router-dom";
import Footer from '../../../features/footer/Footer';



function Pants() {
    return (
      <>
          <div className="link-container">
    <Link to="/landingPage" className="back-link">
        <div className="back-home">חזרה לבית</div>
      </Link>
    </div>
        <div className="shoes">
        {womenPants.map((shoe) => {
          return (
         
              <div className="card-container">
                <Card name={shoe.name} img={shoe.img} card2={true} price={shoe.price} sizes={shoe.sizes}/>
              </div>
         
          );
        })}
      </div>
      <Footer/>
      </>
    )
}

export default Pants
