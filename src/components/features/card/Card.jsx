import React from 'react';
import './card.css';

function Card({img,name}) {

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={img} className="card-img"/>
            
        </div>
    )
}

export default Card
