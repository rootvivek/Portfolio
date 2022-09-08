import React from 'react'
import  intro from '../img/intro.gif'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

function Intro() {
  return (
<div className="gradient-background">
    <div className ="container">
         <Navbar/>
        <div className ="row">
            <div className="col-lg-12">
                <div className="intro">
                    <div className="intro-left col-lg-7">
                        <h3 className="text-light">Namaste 🙏</h3>
                        <h2 className="d-flex intro-name text-light">I' m
                        <Typewriter className="dynamic-text"
                            options={{
                                strings: ['Vimal Kumar.','User Interface Designer.','Frontend Engineer.'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 3000,
                            }}
                            />
                        </h2>
                        <h6 className="intro-subtitle text-light mt-3">A Designer who write codes. i like to make digital experiences easier and simpler for people.</h6>
                    </div>
                    <div className="intro-right col-lg-5">
                        <img src={intro} className="intro-img" alt='intro-img' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Intro