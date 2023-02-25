/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
//import logo from "../ui/homez-lg.PNG";

function Header() {
 
    return (
      <div className='header fixed flex'>
        <div className='logo'>
          <img src={require("../ui/homez-lg.PNG")}/>
        </div>
      </div>
    );

}

export default Header;