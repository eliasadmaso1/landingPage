import React from 'react';
import './women.css';
import { Link } from "react-router-dom";


function Women() {
    return (
        <div className="women">
        <Link to="/womenPants" style={{textDecoration:"none",color:"black"}}>
          <div className="women-section">
            <h2 className="women-section-title">מכנסיים</h2>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b83f0ac-1634-4ac4-8cb6-e83799fe3c77/epic-luxe-mid-rise-pocket-leggings-jx6hHt.png"
              alt=""
              className="women-img"
            />
          </div>
        </Link>
        <Link to="/womenShoes" style={{textDecoration:"none",color:"black"}}>
          <div className="women-section">
            <h2 className="women-section-title">נעליים</h2>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e840eb6-3c2b-43d2-9d58-81b1a1019f8e/air-force-1-07-shoes-KFTQ8r.png"
              alt=""
              className="women-img"
            />
          </div>
        </Link>
      </div>
    )
}

export default Women
