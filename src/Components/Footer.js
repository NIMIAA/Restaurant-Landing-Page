import React from 'react';
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo}/>
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Career</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>244-6778-2281</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Condition</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
};

export default Footer;