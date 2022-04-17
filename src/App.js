
import React from 'react'
import Hero from './views/hero/Hero';
import Navbar from './views/navbar/Navbar';
import Portfolio from './views/portfolio/Portfolio';
import Products from './views/products/Products';
import Services from './views/services/Services';
import Testimonials from './views/testimoial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Products/>
    </div>
  );
}

export default App;