import React from 'react';
import './profile.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typewriter from './Typewriter';

const Profile = () => {
    return (
        <>
            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icons">
                                <a href="https://www.linkedin.com/in/raj-gupta-a41118264"><LinkedInIcon /></a>
                                <a href="https://github.com/"><GitHubIcon /></a>
                                <a href="mailto:rajgupta84639@gmail.com"><MailIcon /></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                Hello, I'M <span className="highlighted-text">Raj Gupta</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <h1>
                                <div className="typical-wrapper">
                                    <Typewriter
                                        words={[
                                            "Software Developer ⌨️",
                                            "Frontend Specialist 🚀",
                                            "React & Next.js Dev ⚛️",
                                        ]}
                                    />
                                </div>
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front end operations.
                            </span>
                        </div>
                        <div className="profile-options">
                            <a href="#contact">
                                <button className='btn primary-btn'>Hire Me</button>
                            </a>
                            <a href="resume/Raj_SWE_Resume.pdf" download="Raj_Gupta_Resume.pdf">
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
