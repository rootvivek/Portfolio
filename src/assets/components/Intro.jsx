import React from 'react'
import arrow from '../img/arrow.gif'
import Navbar from './Navbar';
import 'animate.css';

function Intro() {
  return (
<div className="hero">
    <div className ="container">
        <Navbar/>
        <div className ="row">
            <div className="col-12">
                <div className="intro animate__animated animate__fadeInUp">
                        <h2 className="intro-text">From code to canvas,</h2>
                        <h2 className="intro-text"> I'm Vimal Kumar.</h2>
                        <h5 className="intro-subtitle">a product young designer with a passion for blending technology and art.</h5>
                    </div>
                </div>
        </div>
    <img src={arrow} className="arrow d-flex mx-auto" alt='arrow-img' />
    </div>
</div>
  )
}

export default Intro