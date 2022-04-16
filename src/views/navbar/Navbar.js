import React from 'react'
import './navbar.css'
import {Link} from '@material-ui/core';
import img from 'src/assets/images/cakeLogo.png'

export default function Navbar() {
  return (
   
         <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> 
          <img src={img} alt="" />
          </span>
        </div>
        <div className="topRight"> 
        </div>
      </div>
    </div>
  )
}

