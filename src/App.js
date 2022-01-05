import React, { useEffect } from 'react'
import './App.css'
import Aboutme from './PortfolioContainer/AboutMe/Aboutme'
import Contactme from './PortfolioContainer/ContactMe/Contactme'
import Home from './PortfolioContainer/Home/Home'
import Resume from './PortfolioContainer/Resume/Resume'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const App = () => {
  window.onscroll = function(){scrollFunction()};
  const scrollFunction = ()=>{
    if(document.documentElement.scrollTop < 40)
    {
      document.getElementById('scroll').style.display = "none";
    }
    else{
      document.getElementById('scroll').style.display = "block";
    }
  }
  useEffect(()=>{
    if(document.documentElement.scrollTop < 40)
    {
      document.getElementById('scroll').style.display = "none";
    }
    else{
      document.getElementById('scroll').style.display = "block";
    }
  },[])

  const setScrollHeight = ()=>{
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <Home/>
      <Aboutme/>
      <Resume/>
      <Contactme/>
      <div id='scroll' className="scroll-up">
        <button onClick={setScrollHeight}><ArrowUpwardIcon/> </button>
      </div>
    </>
  )
}

export default App
