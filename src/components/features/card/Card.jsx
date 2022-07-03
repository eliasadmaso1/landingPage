import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import './card.css';

function Card({images,name,img}) {

    return (
        <div className="card">
            <span className="card-title">{name}</span>
            {/* <ImageSlider slides={images}/> */}
            <img src={img} className="card-img"/>
            
        </div>
    )
}

export default Card
