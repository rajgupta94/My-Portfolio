import React from 'react'
import LineBar from '../Components/LineBar'
import './About.css'

const Aboutme = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-root">
                    <div className="about-head">
                        <h1>About Me</h1>
                        <p>Why Choose Me ?</p>
                    </div>
                    <div className="lineBar-main">
                        <LineBar/>
                    </div>
                    <div className="about-main">
                        <div className="about-me-para">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae exercitationem fuga molestiae minima officiis accusantium ex deleniti voluptatum ducimus porro? Eum obcaecati voluptates sapiente id veritatis illum hic iusto natus!</p>
                        </div>
                        <div className="about-me-highlights">
                            <p>Here are few Highlights:</p>
                            <ul>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                            </ul>
                        </div>
                        <div className="profile-options">
                            <button className='btn primary-btn'>Hire Me</button>
                            <a href="resume.pdf" download={"Aman Gupta's Resume.pdf"}>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
