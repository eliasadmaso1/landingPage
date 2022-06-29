import React, { useState } from "react";
import "./navbar.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const menuData = [
    {
      title: <LocalPhoneIcon />,
      href: "tel:0552753626",
    },
    {
      title: <FacebookIcon />,
      href: "https://www.facebook.com/daniel.masala.14",
    },
    {
      title: "גלריה",
      link: "/gallery",
    },
    {
      title: "אודות",
      link: "/about",
    },
    {
      title: "בית",
      link: "/bar-repo",
    },
  ];

  const menuMobileData = [
    {
      title: "בית",
      link: "/bar-repo",
    },
    {
      title: "אודות",
      link: "/about",
    },
    {
      title: "גלריה",
      link: "/gallery",
    },
    {
      title: <FacebookIcon />,
      href: "https://www.facebook.com/daniel.masala.14",
    },
    {
      title: <LocalPhoneIcon />,
      href: "tel:0552753626",
    },
  ];
  return (
    <>
      <div className="navbar-container">
     

        {menuData.map((item) => {
          return item.link ? (
         
              <div className="menu-item-container">
                <h4>{item.title}</h4>
              </div>
         
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
                <li onClick={handleClick}>
                    {item.title}
        
                </li>
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
