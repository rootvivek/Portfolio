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
        <h2 className="title py-5">Skills</h2>
        <div className="row">
            <div className="col-12"></div>
            <h1 className='text-center py-4'>Frontend Web Developer and design Tools</h1>
                <div className="skills col-lg-6">
                    <div className="skills-main">
                        <img src={html} className="skills-img" alt='html' />
                        <p className='skills-title'>Html</p>
                        <p className='skills-subtitle'>Advanced</p>
                    </div>
                    <div className="skills-main">
                        <img src={css} className="skills-img" alt='css' />
                        <p className='skills-title'>Css</p>
                        <p className='skills-subtitle'>Advanced</p>
                    </div>
                    <div className="skills-main">
                        <img src={javascript} className="skills-img" alt='Javascript' />
                        <p className='skills-title'>Javascript</p>
                        <p className='skills-subtitle'>Intermediate</p>
                    </div>
                    <div className="skills-main">
                        <img src={react} className="skills-img" alt='React' />
                        <p className='skills-title'>React</p>
                        <p className='skills-subtitle'>Basic</p>
                    </div>
                    <div className="skills-main">
                        <img src={git} className="skills-img" alt='Git' />
                        <p className='skills-title'>Git</p>
                        <p className='skills-subtitle'>Intermediate</p>
                     </div>
                </div>
                <div className="skills col-lg-6">
                    <div className="skills-main">
                        <img src={figma} className="skills-img" alt='figma' />
                        <p className='skills-title'>Figma</p>
                        <p className='skills-subtitle'>Advanced</p>
                    </div>
                     <div className="skills-main">
                        <img src={invision} className="skills-img" alt='invision' />
                        <p className='skills-title'>Invision</p>
                        <p className='skills-subtitle'>Basic</p>
                    </div> 
                    <div className="skills-main">
                        <img src={adobe} className="skills-img" alt='adobe' />
                        <p className='skills-title'>Adobe XD</p>
                        <p className='skills-subtitle'>Intermediate</p>
                    </div>
                     <div className="skills-main">
                        <img src={adobephotoshop} className="skills-img" alt='adobe-photoshop' />
                        <p className='skills-title'>Adobe Photoshop</p>
                        <p className='skills-subtitle'>Intermediate</p>
                    </div> 
                    <div className="skills-main">
                        <img src={sketch} className="skills-img" alt='sketch' />
                        <p className='skills-title'>Sketch</p>
                        <p className='skills-subtitle'>Basic</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills