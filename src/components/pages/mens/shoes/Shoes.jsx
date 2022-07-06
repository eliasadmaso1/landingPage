import React from "react";
import Card from "../../../features/card/Card";
import "./shoes.css";
import { menShoes } from "../../../../data/shoes";

function Shoes() {


  return (
    <div className="shoes">
      {menShoes.map((shoe) => {
        return (
       
            <div className="card-container">
              <Card name={shoe.name} img={shoe.img} />
            </div>
       
        );
      })}
    </div>
  );
}

export default Shoes;
