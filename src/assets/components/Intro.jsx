import React from 'react'
import arrow from '../img/arrow.gif'
import Navbar from './Navbar';

function Intro() {
  return (
<div className="gradient-background">
    <div className ="container pt-4">
        <Navbar/>
        <div className ="row">
            <div className="col-lg-12">
                <div className="intro pb-5">
                    <div className="intro-left col-lg-8">
                        <h1 className="intro-text">Hello,I'm Vimal.</h1>
                        <h1 className="intro-text">I'm a designer.</h1>
                        <h5 className="intro-subtitle">A Designer who write codes. i like to make digital experiences easier and simpler for people.</h5>
                    </div>
                </div>
            </div>
        </div>
    <img src={arrow} className="arrow d-flex mx-auto" alt='arrow-img' />
    </div>
</div>
  )
}

export default Intro