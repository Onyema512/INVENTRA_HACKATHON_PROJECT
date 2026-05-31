import React from 'react'
import './Css/LandingPage.css'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import Features from '../../Components/Features'
import Manage from '../../Components/Manage'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Manage/>
    </div>
  )
}

export default LandingPage
