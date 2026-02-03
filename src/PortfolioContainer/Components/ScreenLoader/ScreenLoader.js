import React from 'react';
import './ScreenLoader.css';

const ScreenLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-logo">
                    <span>RG</span>
                </div>
                <div className="loader-text">
                    <span className="letter">R</span>
                    <span className="letter">A</span>
                    <span className="letter">J</span>
                    <span className="space"> </span>
                    <span className="letter">G</span>
                    <span className="letter">U</span>
                    <span className="letter">P</span>
                    <span className="letter">T</span>
                    <span className="letter">A</span>
                </div>
                <div className="loader-line"></div>
            </div>
        </div>
    );
};

export default ScreenLoader;
