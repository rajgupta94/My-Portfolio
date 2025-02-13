import React from 'react';
import './profile.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
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
                                <a href="https://www.linkedin.com/in/raj-gupta-a41118264"><LinkedInIcon /></a>
                                <a href="https://github.com/"><GitHubIcon /></a>
                                <a href="mailto:rajgupta84639@gmail.com"><AlternateEmailIcon /></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                Hello, I'M <span className="highlighted-text">Raj Gupta {localStorage.getItem('count')} </span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Raj Gupta Dev 🔴", 1200,
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
