import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import './card.css';

function Card({images,name}) {

    return (
        <div className="card">
            <span className="card-title">{name}</span>
            <ImageSlider slides={images}/>
            
        </div>
    )
}

export default Card
