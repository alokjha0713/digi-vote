import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <><div>
      <Navbar />
    </div>
    <div>
        <Slider />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Footer />
      </div></>
  )
}

export default Home