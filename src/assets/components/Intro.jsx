import React from 'react'
import arrow from '../img/arrow.gif'
import Navbar from './Navbar';
import vk from '../img/vk-avatar.svg'
import 'animate.css';

function Intro() {
  return (
<div className="gradient-background">
    <div className ="container pt-4">
        <Navbar/>
        <div className ="row">
            <div className="col-12">
                <div className="intro animate__animated animate__fadeInUp">
                        <h2 className="intro-text">Hello, I'm Vimal.</h2>
                        <h2 className="intro-text">UI Designer and Frontend Web Developer.</h2>
                        <h5 className="intro-subtitle">I design and code beautifully simple things, and I love what I do.</h5>
                        <img className='intro-avatar' src = {vk} alt="#"></img>
                    </div>
                </div>
        </div>
    <img src={arrow} className="arrow d-flex mx-auto" alt='arrow-img' />
    </div>
</div>
  )
}

export default Intro