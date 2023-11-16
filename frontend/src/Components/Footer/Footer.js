import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
        <a href="https://www.youtube.com/@freecodecamp" 
           className="youtube social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faYoutube} size="2x" />
           </a>
         <a href="https://www.facebook.com/mehdi.zaidane.56/"
           className="facebook social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
         <a href="https://twitter.com/reactjs" className="twitter social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.instagram.com/mehdi_zdn5/"
           className="instagram social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
        </div>
    );
};

export default Footer;