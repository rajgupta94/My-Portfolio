import React from 'react'
import './workHistory.css'

const WorkHistory = () => {
    return (
        <>
            <div className="resume-details-container">
                {/* Digital Monger */}
                <div className="resume-detail-main resume-detail-main2">
                    <div className="resume-college-info resume-college-info2">
                        <h5>Frontend Developer - <span>Digital Monger</span> </h5>
                        <div className="resume-work-description">
                            <ul>
                                <li><strong>Key Skills:</strong> React.js, Next.js, TypeScript, Tailwind CSS</li>
                                <li>Built scalable and high-performance web applications using React.js and Next.js, ensuring clean architecture.</li>
                                <li>Modularized 40+ React components, reducing redundancy by 28% and improving maintainability.</li>
                                <li>Improved SEO and performance using Lighthouse, reducing page load time from 3.2s to 1.8s.</li>
                                <li>Integrated REST APIs and collaborated with teams to deliver responsive, production-ready features.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-clg-time resume-clg-time2">
                        <div>FEB 2026 - PRESENT</div>
                        <div className="resume-remote-badge">Fulltime</div>
                    </div>
                </div>


                {/* Awwaltech */}
                <div className="resume-detail-main resume-detail-main2">
                    <div className="resume-college-info resume-college-info2">
                        <h5>Frontend Developer - <span>Awwaltech</span> </h5>
                        <div className="resume-work-description">
                            <ul>
                                <li>Built 6 features on-time with zero missed deadlines, collaborating closely with the CTO.</li>
                                <li>Worked on minor backend tasks using Node.js and Express.js, contributing to bug fixes and API testing.</li>
                                <li>Participated in code reviews, testing, and deployment, ensuring high performance and clean code.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-clg-time resume-clg-time2">
                        <div>OCT 2025 - DEC 2025</div>
                        <div className="resume-remote-badge">Intern</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WorkHistory
