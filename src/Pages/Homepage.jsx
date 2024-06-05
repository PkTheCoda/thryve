import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MainFeatures from '../Components/MainFeatures'
import AboutPranav from '../Components/AboutPranav'
import PricingHome from '../Components/PricingHome'


const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <MainFeatures />
        {/* <AboutPranav /> */}
        <PricingHome />
    </>
  )
}

export default Homepage