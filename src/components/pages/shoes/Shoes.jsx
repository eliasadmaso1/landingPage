import React from 'react';
import Card from '../../features/card/Card';
import './shoes.css';
import {Link} from 'react-router-dom';

function Shoes() {
    return (
        <div className="shoes">

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card name="סניקרס React vision" img="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/x/7/x741900001-11602891010.jpg"/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card name="סניקרס Air VaporMax" img="https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/9/x986220001-11633603422.jpg"/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card name="נעלי ריצה Downshifter 11" img="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/z/0/z077620001-11625397150_2.jpg"/>
            </div>
            </Link>

            <Link to="/shoe" style={{textDecoration:"none",color:"black"}}>
            <div className="card-container">
            <Card name="נעלי ריצה TEEN" img="https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/1/z101570001-11626937260.jpg"/>
            </div>
            </Link>

          

        
          

            
        </div>
    )
}

export default Shoes
