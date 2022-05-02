import React from 'react'
import  intro from '../img/intro.gif'
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="intro d-flex align-items-center">
                    <div className="intro-left col-lg-6">
                        <h3>Hello there 👋🏼,</h3>
                        <h2 className="d-flex intro-name">I'm
                        <Typewriter className="dynamic-text "
                            options={{
                                strings: ['Vimal Kumar.','Frontend Engineer.','UI Designer.'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 3000,
                            }}
                            />
                        </h2>
                        <h6 className="intro-subtitle mt-3">Currently designing @Microsoft.Previously @NASA, @Google, @Cleartrip, and @Augmentally. Recent graduate of MS HCI at Georgia Tech.</h6>
                        <button type="button" class="btn btn-dark mt-4 px-3">Contact Us</button>
                    </div>
                    <div className="intro-right col-lg-6">
                        <img src={intro} className="intro-img" alt='intro-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro