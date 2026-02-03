import React from 'react'
import './awards.css'

const Awards = () => {
    return (
        <>
            <div className="resume-details-container">
                <div className="resume-detail-main resume-award-item">
                    <div className="resume-college-info">
                        <h5>Greycampus :- A foundation Program in full stack </h5>
                        <p className="award-description">Completed a comprehensive program covering the fundamentals of full-stack web development.</p>
                    </div>
                </div>
                <div className="resume-detail-main resume-award-item">
                    <div className="resume-college-info">
                        <h5>Freecodecamp :- Responsive Web Design </h5>
                        <p className="award-description">Certified in building responsive websites using HTML, CSS, Flexbox, and CSS Grid.</p>
                    </div>
                </div>
                <div className="resume-detail-main resume-award-item">
                    <div className="resume-college-info">
                        <h5>Coursera :- Programming for Everybody </h5>
                        <p className="award-description">Introductory course on Python programming and fundamental computer science concepts.</p>
                    </div>
                </div>
                <div className="resume-detail-main resume-award-item">
                    <div className="resume-college-info">
                        <h5>HackerRank :- React Basic Certificate </h5>
                        <p className="award-description">Validated proficiency in React component lifecycle, state management, and props.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards
