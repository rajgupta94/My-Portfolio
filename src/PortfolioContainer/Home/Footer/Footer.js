import React from 'react'
import './footer.css'
import footer from "../../../assets/images/shape-bg.png"

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-parent">
                    <img src={footer} alt="footer" />
                </div>
            </div>
        </>
    )
}

export default Footer
