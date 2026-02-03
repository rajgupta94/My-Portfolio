import React, { useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="navbar-container">
            <div className="navbar-parent">
                <div className="navbar-logo">
                    <span>PortFolio</span>
                </div>
                <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#resume" onClick={() => setIsOpen(false)}>Resume</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle-container">
                    <button
                        className={`theme-toggle ${theme}`}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? (
                            <i className="fas fa-moon"></i>
                        ) : (
                            <i className="fas fa-sun"></i>
                        )}
                    </button>
                </div>

                <div
                    className={`navbar-hamburger ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar
