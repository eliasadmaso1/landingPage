import React from 'react';
import './footer.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-details">
                <h4>שעות פתיחה</h4>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>
                <span className="footer-span">א׳ 9:00 - 21:00</span>


            </div>
            <div className="footer-details">
                <h4>ירון מותגים</h4>
                <span className="footer-span">הרצל 31, בת ים</span>
                <span className="footer-span">050-7659943</span>
                <FacebookIcon className="footer-icon"/>
                <InstagramIcon className="footer-icon"/>
                <WhatsAppIcon className="footer-icon"/>

            </div>
            <div className="footer-details">
                <h4>סניפים</h4>
                <span className="footer-span">הנרקיס 5, בת ים</span>
                <span className="footer-span">רבין 17, בת ים</span>
                <span className="footer-span">הרצל 31, בת ים</span>



            </div>

            
        </div>
    )
}

export default Footer
