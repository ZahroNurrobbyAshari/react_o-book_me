import React from 'react'

import Button from '../components/button';


const Nav=()=>{


    return(
      <div>
        
          <ul className="nav-list">
            <li className="logo">O - Book<b>.</b></li>
            <li><a ><Button btn="Home" /></a></li>
            <li><a><Button btn="About" /></a></li>
            <li><a><Button btn="Contact" /></a></li>
            <li><a><Button btn="Login" /></a></li>
            <li><a><Button btn="Register" /></a></li>
          </ul>
      </div>
    );
}

export default Nav;

