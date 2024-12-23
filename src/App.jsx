import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Showcase from './Pages/Showcase';
import ShowcasePages from './Pages/ShowcasePages';


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route 
            index
            element={<Homepage />}
          />

          <Route 
            path="/contact"
            element={<Contact />}
          />

          <Route 
            path="/showcase"
            element={<Showcase />}
          />

          <Route 
            path="/showcase/:showcaselink"
            element={<ShowcasePages />}
          />


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
