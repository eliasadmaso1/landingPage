import React from 'react';
import './shirts.css';
import Card from '../../../features/card/Card';
import { menShirts } from '../../../../data/shirts';



function Shirts() {
    return (
        <div className="shirts">
        {menShirts.map((shirt) => {
          return (
        
              <div className="card-container">
                <Card name={shirt.name} img={shirt.img} price={shirt.price} sizes={shirt.sizes}/>
              </div>
       
          );
        })}
      </div>
    )
}

export default Shirts
