import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MainFeatures from '../Components/MainFeatures'
import AboutPranav from '../Components/AboutPranav'
import PricingHome from '../Components/PricingHome'
import OurProjects from '../Components/OurProjects'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'

const Homepage = () => {
  return (
    <>
        <Hero />
        <MainFeatures />
        <AboutPranav />
        <PricingHome />
        <Testimonial />
        {/* <OurProjects /> */}
        <ContactForm />
    </>
  )
}

export default Homepage