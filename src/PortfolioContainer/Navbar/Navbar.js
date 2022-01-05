import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-main">
                    <div className="logo-name">
                        <h1>PortFolio</h1>
                    </div>
                    <div className="navbar-anchors">
                        <ul className="navbar-ul">
                            <li className="navbar-li ">
                                <a href="#home" className="navlink-main active-link">Home</a>
                            </li>
                            <li className="navbar-li">
                                <a href="#about" className="navlink-main">About Me</a>
                            </li>
                            <li className="navbar-li">
                                <a href="#resume" className="navlink-main">Resume</a>
                            </li>
                            <li className="navbar-li">
                                <a href="#contact" className="navlink-main">ContactMe</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
