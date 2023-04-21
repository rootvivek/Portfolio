import React from 'react'
import html from '../img/html.svg'
import css from '../img/css.svg'
import javascript from '../img/javascript.svg'
import react from '../img/react.svg'
import git from '../img/git.svg'
import figma from '../img/figma-1.svg'
import invision from '../img/invision.svg'
import adobe from '../img/adobe-xd-1.svg'
import adobephotoshop from '../img/adobe-photoshop.svg'
import sketch from '../img/sketch-2.svg'

function skills(props) {
  return (
    <div className="skills-set">
        <div className="container">
        <h2 className="t1">Skills</h2>
        <div className="row">
            <div className="col-12"></div>
            <h4 className='pb-5'>Frontend Development and design Tools</h4>
                <div className="skills col-lg-6">
                    <div className="skills-main">
                        <img src={html} className="skills-img" alt='html' />
                        <p className='skills-title'>Html</p>
                    </div>
                    <div className="skills-main">
                        <img src={css} className="skills-img" alt='css' />
                        <p className='skills-title'>Css</p>
                    </div>
                    <div className="skills-main">
                        <img src={javascript} className="skills-img" alt='Javascript' />
                        <p className='skills-title'>Javascript</p>
                    </div>
                    <div className="skills-main">
                        <img src={react} className="skills-img" alt='React' />
                        <p className='skills-title'>React</p>
                    </div>
                    <div className="skills-main">
                        <img src={git} className="skills-img" alt='Git' />
                        <p className='skills-title'>Git</p>
                     </div>
                </div>
                <div className="skills col-lg-6">
                    <div className="skills-main">
                        <img src={figma} className="skills-img" alt='figma' />
                        <p className='skills-title'>Figma</p>
                    </div>
                     <div className="skills-main">
                        <img src={invision} className="skills-img" alt='invision' />
                        <p className='skills-title'>Invision</p>
                    </div> 
                    <div className="skills-main">
                        <img src={adobe} className="skills-img" alt='adobe' />
                        <p className='skills-title'>Adobe XD</p>
                    </div>
                     <div className="skills-main">
                        <img src={adobephotoshop} className="skills-img" alt='adobe-photoshop' />
                        <p className='skills-title'>Photoshop</p>
                    </div> 
                    <div className="skills-main">
                        <img src={sketch} className="skills-img" alt='sketch' />
                        <p className='skills-title'>Sketch</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills