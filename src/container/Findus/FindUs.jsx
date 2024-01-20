import React from 'react';


import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import "./findus.css"

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant app__findus-header">Find Us</h1>
      <div className='app__wrapper-content'>
        <p className="p__opensans">Lagos, Nigeria.</p>
        <p className="p__cormorant app__wrapper-content_time">Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 9:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 01:00 pm - 01:00 am</p>
      </div>

      <button type="button" className='custom__button app__wrapper-content_button'>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  
  </div>
);

export default FindUs;
