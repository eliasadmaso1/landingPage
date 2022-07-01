import React, { useEffect, useState } from "react";
import "./shoe.css";
import { shoes } from "../../../data/shoes";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function Shoe() {
  const [shoe, setShoe] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const currectShoe = shoes.find((item) => {
      return (item.id == id);
    });
    setShoe(currectShoe);
  }, [id]);

  return (
    shoe && (
      <>
        <div className="product-container">
          <div className="product-layout">
            <div className="shoe-images">
              <img className="img1" src={shoe.images[0]} width="500" />
              <img
                className="img2"
                src={shoe.images[1]}
                width="500"
              />
              <img
                className="img3"
                src={shoe.images[2]}
                width="500"
              />
              <img
                className="img4"
                src={shoe.images[3]}
                width="500"
              />
            </div>
            <div className="shoe-details">
              <h3>נעלי גברים</h3>

              <h1>{shoe.name}</h1>
              <h4>{shoe.price}</h4>
              <h4 style={{ color: "green" }}>במלאי</h4>
              <h4 style={{ borderBottom: "solid 1px", width: "35px" }}>
                מידות
              </h4>
              <div className="sizes">
                <div className="size">40</div>
                <div className="size">41</div>
                <div className="size">42</div>
                <div className="size">43</div>
                <div className="size">44</div>
              </div>

              <p>{shoe.desc}
              </p>

              <Link to="/landingPage">
              <button className="backButton">בחזרה לבית</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Shoe;
