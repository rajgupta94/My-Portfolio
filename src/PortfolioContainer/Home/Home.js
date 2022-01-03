import React from 'react'
import './home.css'
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <Navbar/>
                <Profile/>
                <Footer/>
                
            </div>
        </>
    )
}

export default Home