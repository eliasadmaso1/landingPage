import React from "react";
import "./mens.css";
import { Link } from "react-router-dom";

function Mens() {
  return (
    <div className="men">
      <Link to="/shirts" style={{textDecoration:"none",color:"black"}}>
        <div className="men-section">
          <h2 className="men-section-title">חולצות</h2>
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/39655c11-a673-43c5-a641-4468e12a7296/jordan-23-engineered-85-graphic-t-shirt-NGpKNR.png"
            alt=""
            className="men-img"
          />
        </div>
      </Link>
      <Link to="/menShoes" style={{textDecoration:"none",color:"black"}}>
        <div className="men-section">
          <h2 className="men-section-title">נעליים</h2>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11b2cf9-ba4e-4b98-8021-b1527da06169/air-max-270-g-golf-shoe-gTpCFg.png"
            alt=""
            className="men-img"
          />
        </div>
      </Link>
    </div>
  );
}

export default Mens;
