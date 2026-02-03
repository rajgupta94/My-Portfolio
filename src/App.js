import React, { useEffect, useState } from 'react'
import './App.css'
import Aboutme from './PortfolioContainer/AboutMe/Aboutme'
import Contactme from './PortfolioContainer/ContactMe/Contactme'
import Home from './PortfolioContainer/Home/Home'
import Resume from './PortfolioContainer/Resume/Resume'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ThemeProvider } from './Context/ThemeContext';
import ScreenLoader from './PortfolioContainer/Components/ScreenLoader/ScreenLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Aesthetic delay
    return () => clearTimeout(timer);
  }, []);

  window.onscroll = function () { scrollFunction() };
  const scrollFunction = () => {
    if (document.documentElement.scrollTop < 40) {
      const scrollBtn = document.getElementById('scroll');
      if (scrollBtn) scrollBtn.style.display = "none";
    }
    else {
      const scrollBtn = document.getElementById('scroll');
      if (scrollBtn) scrollBtn.style.display = "block";
    }
  }

  useEffect(() => {
    scrollFunction();
  }, [])

  const setScrollHeight = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <ThemeProvider>
      {loading ? (
        <ScreenLoader />
      ) : (
        <div className="app-container fade-in-app">
          <Home />
          <Aboutme />
          <Resume />
          <Contactme />
          <div id='scroll' className="scroll-up">
            <button onClick={setScrollHeight}><ArrowUpwardIcon /> </button>
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
