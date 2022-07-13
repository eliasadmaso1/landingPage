import React, { useState } from "react";
import "./home.css";
import menu from '../../images/others/menu2.png';
import close from '../../images/others/cancel.png';
import back from '../../images/others/back2.jpg';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Home() {

    const [toggle,setToggle] = useState(true);

    const clicked = ()=>{
        setToggle(prev => !prev);
    }

  return (
    <>
        <section className={toggle ? "showcase" : "showcase active"}>
        <header>
            <h2 className="logo">ענק המותגים</h2>
            {toggle ?  <MenuIcon onClick={clicked} style={{fontSize:"35px"}}/> :   <CloseIcon onClick={clicked} style={{fontSize:"35px"}}/>}
          
        </header>
        <img src={back} alt="background" className="background"/>

        <div className="overlay"></div>

        <div className="text">
            <h2>כל המותגים</h2>
            <h3>איכות גבוהה</h3>
            <h3>מחירים זולים</h3>
           <a href="">ווצאפ</a>
        </div>
    </section>
    <div className="menu">
        <ul>
        <li> <Link to="/landingPage" className="link">עמוד הבית</Link></li>
        <li> <Link to="/menShoes" className="link">נעלי גברים</Link></li>
        <li> <Link to="/menShirts" className="link">חולצות גברים</Link></li>
        <li> <Link to="/womenShoes" className="link">נעלי נשים</Link></li>
        <li> <Link to="/womenShirts" className="link">חולצות נשים</Link></li>
        <li> <Link to="/" className="link">נעלי ילדים</Link></li>
        <li> <Link to="/" className="link">הלבשה תחתונה</Link></li>


          

        </ul>
    </div>
    </>
    
  )
}

export default Home;
