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
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [mountRest, setMountRest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Stagger the mounting of heavy sections
      setTimeout(() => setMountRest(true), 150);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setScrollHeight = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      {loading ? (
        <ScreenLoader />
      ) : (
        <div className="app-container fade-in-app">
          <Home />
          <Aboutme />
          {mountRest && (
            <>
              <Resume />
              <Contactme />
            </>
          )}
          {showScrollBtn && (
            <div id='scroll' className="scroll-up">
              <button onClick={setScrollHeight} aria-label="Scroll to top">
                <ArrowUpwardIcon />
              </button>
            </div>
          )}
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
