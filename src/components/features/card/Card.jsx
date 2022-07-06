import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import './card.css';
import {Link} from 'react-router-dom';

function Card({name,img}) {

    return (
        <div className="card">
            <span className="card-title">{name}</span>
           <img src={img} className="card-img"/>
            
        </div>
    )
}

export default Card
