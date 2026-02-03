import React from 'react'
import './workHistory.css'

const WorkHistory = () => {
    return (
        <>
            <div className="resume-details-container">
                {/* Aczeron */}
                <div className="resume-detail-main resume-detail-main2">
                    <div className="resume-college-info resume-college-info2">
                        <h5>Frontend Developer - <span>Aczeron</span> </h5>
                        <div className="resume-work-description">
                            <ul>
                                <li><strong>Key Skills:</strong> React.js, Next.js, Node.js, Technical Documentation</li>
                                <li>Designed and implemented authentication flows (sign-in/sign-up, authorization) and an admin dashboard using React.js and Next.js, improving overall user experience and security.</li>
                                <li>Collaborated with cross-functional team members to build responsive and user-friendly UI components using React.js and Tailwind CSS.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-clg-time resume-clg-time2">
                        <div>SEPT 2024 - DEC 2024</div>
                        <div className="resume-remote-badge">Remote</div>
                    </div>
                </div>

                {/* Awwaltech */}
                <div className="resume-detail-main resume-detail-main2">
                    <div className="resume-college-info resume-college-info2">
                        <h5>Frontend Developer - <span>Awwaltech</span> </h5>
                        <div className="resume-work-description">
                            <ul>
                                <li>Developed responsive and dynamic user interfaces using React.js, Next.js, and Tailwind CSS, improving overall UI consistency and speed.</li>
                                <li>Collaborated with the backend team to integrate RESTful APIs and handle authentication and data fetching efficiently.</li>
                                <li>Worked on minor backend tasks using Node.js and Express.js, contributing to bug fixes and API testing.</li>
                                <li>Improved component reusability and reduced code redundancy by modularizing the UI architecture.</li>
                                <li>Coordinated with the CTO and product team to deliver multiple features within tight deadlines.</li>
                                <li>Participated in code reviews, testing, and deployment, ensuring high performance and clean code standards.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-clg-time resume-clg-time2">
                        <div>JUNE 2024 - SEPT 2024</div>
                        <div className="resume-remote-badge">Remote</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkHistory
