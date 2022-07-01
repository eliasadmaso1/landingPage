import React from "react";
import Card from "../../features/card/Card";
import "./shoes.css";
import { Link } from "react-router-dom";
import { shoes } from "../../../data/shoes";

function Shoes() {
  return (
    <div className="shoes">
      {shoes.map((shoe) => {
        return (
          <Link
            to={`/landingPage/shoe/${shoe.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card-container">
              <Card name={shoe.name} img={shoe.img} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Shoes;
