import React from 'react'
// import  intro from '../img/intro.gif'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

function Intro() {
  return (
<div className="gradient-background">
    <div className ="container pt-4">
        <Navbar/>
        <div className ="row">
            <div className="col-lg-12">
                <div className="intro">
                    <div className="intro-left col-lg-6">
                        <h1 className="text-light">Namaste 🙏</h1>
                        <h1 className="d-flex intro-name text-light pb-1">I' m {" "}
                        <Typewriter className="dynamic-text"
                            options={{
                                strings: ['Vimal Kumar.','UI Designer.','Frontend Engineer.'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 3000,
                            }}
                            />
                        </h1>
                        <h4 className="intro-subtitle text-light mt-3">A Designer who write codes. i like to make digital experiences easier and simpler for people.</h4>
                    </div>
                    <div className="intro-right col-lg-5">
                        {/* <img src={intro} className="intro-img" alt='intro-img' /> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Intro