import React from 'react';
import { womenPants } from '../../../../data/shirts';
import Card from '../../../features/card/Card';


function Pants() {
    return (
        <div className="shoes">
        {womenPants.map((shoe) => {
          return (
         
              <div className="card-container">
                <Card name={shoe.name} img={shoe.img} card2={true} price={shoe.price} sizes={shoe.sizes}/>
              </div>
         
          );
        })}
      </div>
    )
}

export default Pants
