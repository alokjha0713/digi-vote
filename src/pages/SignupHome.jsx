import React from 'react'
import Navbar1 from '../components/Navbar1';
import Slider from '../components/Slider';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const SignupHome = () => {
  return (
    <><div>
      <Navbar1 />
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

export default SignupHome