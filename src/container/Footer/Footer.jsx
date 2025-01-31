import React from 'react';

import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";


import { FooterOverlay, Newsletter } from '../../components';


import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
   <FooterOverlay/>
   <Newsletter/>

  
   <div className="app__footer-links">
    <div className="app__footer-links_contact">

      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">Lagos, Nigeria.</p>
      <p className="p__opensans">+2349025579441</p>
      <p className="p__opensans">+2348130578223</p>

    </div>

    <div className="app__footer-links_logo">

      <img src={images.gericht} alt="" />
      <p className="p__opensans">"The best way to find yourself 
      is to lose yourself in the service of others.”</p>

      <img src={images.spoon} alt="" style={{marginTop: "15px"}} />

      <div className="app__footer-links_icons">
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram />
      </div>

    </div>

    <div className="app__footer-links_work">

      
    <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Friday:</p>
      <p className="p__opensans">07:00am -11:00 pm</p>
      <p className="p__opensans">Saturday-Sunday:</p>
      <p className="p__opensans">01:00pm -02:00am</p>

    </div>
   </div>

   <div className="footer__copyright">
    <p className="p__opensans">
    2024 FeliNech. All Rights reserved.
    </p>
   </div> 
  </div>


);

export default Footer;
