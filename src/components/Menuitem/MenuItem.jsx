import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>

    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{color: "#dcca87", fontSize: ".7rem"}}>{title}</p>
      </div>


      <div className='app__menuitem-dash'/>

      <div className="app__menuitem-price" >
        <p className="p__cormorant" style={{fontSize: ".9rem"}}>{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{color: "#aaa", fontSize: ".8rem"}}>{tags}</p>
    </div>
    
  </div>
);

export default MenuItem;
