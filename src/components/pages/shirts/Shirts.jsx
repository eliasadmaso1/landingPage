import React from 'react';
import './shirts.css';
import {Link} from 'react-router-dom';
import Card from '../../features/card/Card';
import { shirts } from '../../../data/shirts';



function Shirts() {
    return (
        <div className="shirts">
        {shirts.map((shirt) => {
          return (
            // <Link
            //   to={`/landingPage/shirt/${shirt.id}`}
            //   style={{ textDecoration: "none", color: "black" }}
            // >
              <div className="card-container">
                <Card name={shirt.name} img={shirt.img} />
              </div>
            // </Link>
          );
        })}
      </div>
    )
}

export default Shirts
