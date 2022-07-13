import React from "react";
import Card from "../../../features/card/Card";
import "./shoes.css";
import { menShoes } from "../../../../data/shoes";
import { Link } from "react-router-dom";
import Footer from "../../../features/footer/Footer";

function Shoes() {
  return (
    <>
    <div className="link-container">
    <Link to="/landingPage" className="back-link">
        <div className="back-home">חזרה לבית</div>
      </Link>
    </div>
  

      <div className="shoes">
        {menShoes.map((shoe) => {
          return (
            <div className="card-container">
              <Card
                name={shoe.name}
                img={shoe.img}
                price={shoe.price}
                sizes={shoe.sizes}
              />
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Shoes;
