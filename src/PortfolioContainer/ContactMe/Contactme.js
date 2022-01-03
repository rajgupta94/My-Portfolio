import React from 'react'
import LineBar from '../Components/LineBar'
import ContactsIcon from '@mui/icons-material/Contacts';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Contactme = () => {
    return (
        <>
            <div className="about-container contact-container">
                <div className="about-root">
                    <div className="about-head">
                        <h1>Contact Me</h1>
                        <p></p>
                    </div>
                    <div className="lineBar-main">
                        <LineBar />
                    </div>
                    <div className="contact-main">
                        <div className="contact-getintouch">
                            Get In Touch <ContactsIcon />
                        </div>
                        <div className="contact-lr">
                            <div className="contact-left">
                                <div>
                                    <span><CallIcon /></span>
                                    <a href="tel:+91-8218525893">8218525893</a>
                                </div>
                                <div>
                                    <span><AlternateEmailIcon /></span>
                                    <a href="mailto:aman97703@gmail.com">aman97703@gmail.com</a>
                                </div>
                                <div>
                                    <span><GitHubIcon /></span>
                                    <a href="https://github.com/aman97703">aman97703</a>
                                </div>
                                <div>
                                    <span><LinkedInIcon /></span>
                                    <a href="https://www.linkedin.com/in/aman97703">aman97703</a>
                                </div>
                            </div>
                            <div className="contact-right">
                                <form>
                                    <div className="form-inputs">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder='Your Name...' />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Your Mail..." />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" placeholder='Your Message...'></textarea>
                                    </div>
                                    <div className="form-inputs-submit">
                                        <button type="submit" className='btn highlighted-btn'>Send <SendIcon/> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactme
