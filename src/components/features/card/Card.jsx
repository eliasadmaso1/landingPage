import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import './card.css';
import {Link} from 'react-router-dom';

function Card({images,name,img,url}) {

    return (
        <div className="card">
            <span className="card-title">{name}</span>
            {/* <ImageSlider slides={images}/> */}
            <Link to={url}><img src={img} className="card-img"/></Link>
            
        </div>
    )
}

export default Card
