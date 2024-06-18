import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground}/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage}/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit labore sequi! Dicta harum placeat quam obcaecati deleniti vitae esse, voluptatem facere!
            </p>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima fuga enim ea? Accusantium, quae ut.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill></BsFillPlayCircleFill> Watch Video </button>
            </div>
        </div>
    </div>
  )
}

export default About;