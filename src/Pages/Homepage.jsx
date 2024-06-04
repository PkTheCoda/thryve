import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MainFeatures from '../Components/MainFeatures'


const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <MainFeatures />
        <div className="py-4 bg-red-100">hi</div>
    </>
  )
}

export default Homepage