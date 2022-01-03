import React from 'react'
import './App.css'
import Aboutme from './PortfolioContainer/AboutMe/Aboutme'
import Contactme from './PortfolioContainer/ContactMe/Contactme'
import Home from './PortfolioContainer/Home/Home'
import Resume from './PortfolioContainer/Resume/Resume'

const App = () => {
  return (
    <>
      <Home/>
      <Aboutme/>
      <Resume/>
      <Contactme/>
    </>
  )
}

export default App
