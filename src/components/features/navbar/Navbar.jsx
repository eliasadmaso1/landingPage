import React, { useState } from "react";
import "./navbar.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import {Link} from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const menuData = [
    {
      title: <LocalPhoneIcon style={{textDecoration:"none",color:"black"}}/>,
      href: "tel:0552753626",
    },
    {
      title: <FacebookIcon style={{textDecoration:"none",color:"black"}}/>,
      href: "https://www.facebook.com/daniel.masala.14",
    },
    {
      title: "ג׳ינסים",
      link: "/gallery",
    },
    {
      title: "חולצות",
      link: "/about",
    },
    {
      title: "נעליים",
      link: "/shoes",
    },
    {
      title: "בית",
      link: "/landingPage",
    },
  ];

  const menuMobileData = [
    {
      title: "בית",
      link: "/landingPage",
    },
    {
      title: "נעליים",
      link: "/shoes",
    },
    {
      title: "חולצות",
      link: "/gallery",
    },
    {
      title: "ג׳ינסים",
      link: "/gallery",
    },
    {
      title: <FacebookIcon style={{textDecoration:"none",color:"black"}}/>,
      href: "https://www.facebook.com/daniel.masala.14",
    },
    {
      title: <LocalPhoneIcon style={{textDecoration:"none",color:"black"}}/>,
      href: "tel:0552753626",
    },
  ];
  return (
    <>
      <div className="navbar-container">
     

        {menuData.map((item) => {
          return item.link ? (
         
             <Link to={item.link} style={{textDecoration:"none",color:"black"}}> <div className="menu-item-container">
                <h4>{item.title}</h4>
              </div></Link>
         
          ) : (
            <a href={item.href}>
              <div className="menu-item-container">
                <h4>{item.title}</h4>
              </div>
            </a>
          );
        })}
      </div>
      <div className="nav">
        <div className="nav-container">
      
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CancelIcon /> : <MenuIcon />}
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            {menuMobileData.map((item) => {
              return item.link ? (
                <Link to={item.link} style={{textDecoration:"none",color:"black"}}><li onClick={handleClick}>
                    {item.title}
        
                </li></Link>
              ) : (
                <li onClick={handleClick}>
                  <a href={item.href} className="media-link">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
