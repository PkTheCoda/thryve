import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Showcase from './Pages/Showcase';


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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
