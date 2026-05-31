import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Auth/LandingPage'
import Pricing from './Pages/Auth/Pricing'
import AboutUs from './Pages/Auth/AboutUs'
import ContactUs from './Pages/Auth/ContactUs'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
