import React from 'react';
import './profile.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typical from "react-typical"

const Profile = () => {

    return (
        <>
            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icons">
                                <a href="/"><FacebookIcon /></a>
                                <a href="/"><GoogleIcon /></a>
                                <a href="/"><InstagramIcon /></a>
                                <a href="/"><TwitterIcon /></a>
                                <a href="/"><YouTubeIcon /></a>
                                <a href="/"><LinkedInIcon /></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                Hello, I'M <span className="highlighted-text">Aman Gupta</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Aman Gupta Dev 🔴", 1200,
                                            "Frontend Developer 😎", 1200,
                                            "Mern Stack Dev 💻", 1200,
                                            "React Js Developer 😍", 1200,
                                        ]}
                                    />
                                </h1>
                                <span className="profile-role-tagline">
                                    Knack of building applications with front end operations.
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            <button className='btn primary-btn'>Hire Me</button>
                            <a href="resume.pdf" download={"Aman Gupta's Resume.pdf"}>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
