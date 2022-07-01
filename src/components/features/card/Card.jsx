import React from 'react';
import './card.css';

function Card({img,name}) {

    return (
        <div className="card">
            <span className="card-title">{name}</span>
            <img src={img} className="card-img"/>
            
        </div>
    )
}

export default Card
