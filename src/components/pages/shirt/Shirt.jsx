import React, { useEffect, useState } from "react";
import './shirt.css';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import { shirts } from "../../../data/shirts";

function Shirt() {

    const [shirt, setShirt] = useState(null);
    let { id } = useParams();
  
    useEffect(() => {
      const currectShirt = shirts.find((item) => {
        return (item.id == id);
      });
      setShirt(currectShirt);
    }, [id]);
    return (
        shirt && (
            <>
              <div className="product-container">
                <div className="product-layout">
                  <div className="shirt-images">
                    <img className="img1" src={shirt.images[0]} width="500" />
                    <img
                      className="img2"
                      src={shirt.images[1]}
                      width="500"
                    />
                    <img
                      className="img3"
                      src={shirt.images[2]}
                      width="500"
                    />
                    <img
                      className="img4"
                      src={shirt.images[3]}
                      width="500"
                    />
                  </div>
                  <div className="shirt-details">
                    <h3>חולצות גברים</h3>
      
                    <h1>{shirt.name}</h1>
                    <h4>{shirt.price}</h4>
                    <h4 style={{ color: "green" }}>במלאי</h4>
                    <h4 style={{ borderBottom: "solid 1px", width: "35px" }}>
                      מידות
                    </h4>
                    <div className="sizes">
                      <div className="size">S</div>
                      <div className="size">M</div>
                      <div className="size">L</div>
                      <div className="size">XL</div>
                      <div className="size">XXL</div>
                    </div>
      
                    <p>{shirt.desc}
                    </p>
      
                    <Link to="/landingPage">
                    <button className="backButton">בחזרה לבית</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
    )
}

export default Shirt
