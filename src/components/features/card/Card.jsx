import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import './card.css';
import {Link} from 'react-router-dom';

function Card({name,img,card2,price,sizes}) {

    return (
        <div className="card">
           <img src={img} className={!card2 ? "card-img" : "card-img2"}/>
           <div className="card-overlay">
             
                  <span className="text">{name}</span>
                  <span className="text">{price}</span>
                  <h4 className="sizes-title">מידות</h4>

                  <div className="sizes">
                      {sizes.map((size)=>{
                          return(
                              <span className="size">{size}</span>
                          )
                      })}

                  </div>

             
              </div>
            
        </div>
    )
}

export default Card
