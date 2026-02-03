import React from 'react'
import LineBar from '../Components/LineBar'
import './About.css'
import useScrollReveal from '../Hooks/useScrollReveal'

const Aboutme = () => {
    const [aboutRef, isAboutRevealed] = useScrollReveal();

    return (
        <>
            <div id='about' className={`about-container ${isAboutRevealed ? 'revealed' : ''}`} ref={aboutRef}>
                <div className="about-root">
                    <div className="about-head">
                        <h1>About Me</h1>
                        <p>Detailed Insights</p>
                    </div>
                    <div className="lineBar-main">
                        <LineBar />
                    </div>
                    <div className="about-main">
                        <div className="about-me-para">
                            <p>
                                I’m Raj Gupta, a frontend developer passionate about building scalable, user-centric web applications. With hands-on experience in React, Next.js, and modern UI frameworks, I focus on creating clean interfaces, smooth interactions, and optimized performance. I believe great frontend is where design meets engineering.
                            </p>
                        </div>
                        <div className="about-me-highlights">
                            <p>Core Qualifications:</p>
                            <ul>
                                <li>React & Next.js Development</li>
                                <li>Responsive, User-Centric UI</li>
                                <li>Connect API's</li>
                                <li>API Integration & Auth Flows</li>
                                <li>Performance & UI Optimization</li>
                                <li>State Management & Architecture</li>
                                <li>Problem Solving & Debugging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
