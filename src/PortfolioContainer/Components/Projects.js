import React from 'react';
import './project.css'

const Projects = () => {
    return (
        <>
            <div className="resume-details-container">
                {/* FineBank */}
                <div className="resume-detail-main resume-detail-main4">
                    <div className="resume-college-info">
                        <div className="project-header">
                            <span>FineBank – Digital Banking Web App</span>
                            <div className="project-links">
                                <a href="https://github.com/rajgupta94/FineBank.git" target="_blank" rel="noopener noreferrer">Github</a>
                                <span>|</span>
                                <a href="https://finebank.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                        <div className="resume-work-description">
                            <p className="project-sub-heading">A full-stack digital banking web application enabling users to manage accounts, track expenses, and perform secure transactions in real-time.</p>
                            <ul>
                                <li><strong>Frontend:</strong> Built with Next.js and Tailwind CSS, ensuring a sleek, responsive, and user-friendly interface with smooth animations and intuitive navigation.</li>
                                <li><strong>Backend:</strong> Developed using Node.js and Express.js with MongoDB for secure data management and authentication using JWT.</li>
                                <li>Implemented key features like user authentication, expense tracking, transaction history, and financial analytics dashboard.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Clinexia */}
                <div className="resume-detail-main resume-detail-main4">
                    <div className="resume-college-info">
                        <div className="project-header">
                            <span>Clinexia – Healthcare Management Platform</span>
                            <div className="project-links">
                                <a href="https://github.com/rajgupta94/Clinexia.git" target="_blank" rel="noopener noreferrer">Github</a>
                                <span>|</span>
                                <a href="https://clinexia.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                        <div className="resume-work-description">
                            <p className="project-sub-heading">Built Clinexia, a healthcare management platform aimed at reducing manual clinic workload and improving patient handling efficiency.</p>
                            <ul>
                                <li>Enabled digital management of appointments and patient records through an intuitive web interface.</li>
                                <li>Designed and implemented a scalable full-stack architecture with an integrated backend, enabling secure data management and seamless feature expansion.</li>
                                <li>Streamlined clinic operations by digitizing core workflows, enhancing data accessibility, and reducing dependency on manual processes.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Voice Assistant */}
                <div className="resume-detail-main resume-detail-main4">
                    <div className="resume-college-info">
                        <div className="project-header">
                            <span>Voice-Assistant – Web-Based Voice Assistant</span>
                            <div className="project-links">
                                <a href="https://github.com/rajgupta94/Voice-Assistant.git" target="_blank" rel="noopener noreferrer">Github</a>
                                <span>|</span>
                                <a href="https://voice-assistant-vert.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                        <div className="resume-work-description">
                            <p className="project-sub-heading">A smart and interactive Voice Assistant built using React.js, Tailwind CSS and Web Speech API. This project enables users to give voice commands and receive real-time responses.</p>
                            <ul>
                                <li>Implemented speech-to-text and text-to-speech features for smooth, natural voice interactions with users.</li>
                                <li>Optimized command handling and UI responsiveness to ensure fast execution and seamless user experience.</li>
                                <li>Implemented modular component architecture in React, making the voice assistant easy to extend with new commands and features in the future.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
