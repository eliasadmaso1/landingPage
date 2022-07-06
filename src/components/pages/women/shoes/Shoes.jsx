import React from 'react';
import './shoes.css';
import {womenShoes} from '../../../../data/shoes';
import Card from '../../../features/card/Card';

function Shoes() {
    return (
        <div className="shoes">
        {womenShoes.map((shoe) => {
          return (
         
              <div className="card-container">
                <Card name={shoe.name} img={shoe.img} price={shoe.price} sizes={shoe.sizes}/>
              </div>
         
          );
        })}
      </div>
    )
}

export default Shoes
