import React from 'react'
import './navbar.css'
import {Link} from '@material-ui/core';
import img from 'src/assets/images/cakelogo3.png'

export default function Navbar() {
  return (
   <nav>
   <div className="brand">
     <img src ={img} alt="" className = "img" />
     <div className="toggle"></div>
   </div>
   <ul className="links">
     <li><a  herf="#home" className='active'>Home</a></li>
     <li><a herf="#services">Our Services</a></li>
     <li><a herf="#portfolio">Portfolio</a></li>
     <li><a herf="#testimonials">Testimonials</a></li>
     <li><a herf="#products">Products</a></li>
     <li><a herf="#home">Order</a></li> 
   </ul>



   


   </nav>
       
  )
}

