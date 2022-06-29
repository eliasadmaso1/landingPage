import React from 'react';
import Card from '../../features/card/Card';
import './shoes.css';
import {Link} from 'react-router-dom';

function Shoes() {
    return (
        <div className="shoes">

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card/>
            </div>
            </Link>

        
          

            
        </div>
    )
}

export default Shoes
