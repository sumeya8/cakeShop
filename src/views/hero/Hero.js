import React from 'react'
import img from 'src/assets/images/homeCake2.jpg'
import img2 from 'src/assets/images/HeroDesign.png'
import './hero.css'

export default function Hero() {
  return (
     <section className = "section" id = "home">
        <div className="background">
            <img src = {img} alt = "Background Image"  className = "img3"/>
        </div>
        <div className="content">
            <div className="sale">
                <img src =  "" alt = "" className = "img2" /> 
                <h1 className='h1'><span className='span'></span></h1> 
            </div>
            <div className="info">
               <h2 className='h2'>RETAILER</h2>
               <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, et.</em> 
               <button className ='button'>Order Now</button>
            </div>
        </div>


    </section>
  )
}
