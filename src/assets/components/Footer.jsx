import React from 'react'
import resume from "../resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="resume my-3">
                        <h1>Like what you see??</h1>
                        <h1>
                          View my
                          <a href={resume} download="Vimal resume.pdf">
                            {" "}
                            resume
                          </a>
                          , follow me or contact me below
                        </h1>
                        <div className="social-icon d-flex my-5">
                          <a href="https://github.com/rootvivek" className="github social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                          </a>
                          <a href="https://www.linkedin.com/in/vimal-kumar-3b5722147" className="linkedIn social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                          </a>
                          <a href="https://www.behance.net/rootvivekbfc5" className="Behance social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faBehance} size="2x" />
                          </a>
                          <a href="https://www.twitter.com/rootvivek" className="twitter social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                          </a>
                          <a href="https://www.instagram.com/rootvivek.js" className="instagram social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                          </a>
                        </div>
                      </div>
                  <hr />
                  <div className="footer-main my-5">
                    <div className="col-lg-3 footer-left">
                      <h2><strong>Hello Again,👋</strong></h2>
                    </div>
                    <div className="col-lg-8 footer-right">
                      <p className='font-weight-bold'>Thank you so much for visiting my portfolio! You can learn more about me here.</p>
                      <p>I’m also happy to chat! Say ‘hello’ at my <a href="https://www.linkedin.com/in/vimal-kumar-3b5722147" target="_blank" rel="noreferrer"><strong>Linkedin</strong></a> or my 
                      <a href="mailto:rootvivek@gmail.com"><strong> mail</strong></a>.</p>
                    </div>
                  </div>
              </div>
           </div>
        </div>
        <div className="footer-end py-3">
          <p> © 2022 Designed & Developed by Vimal Kumar</p> 
        </div>
    </div>
  )
}

export default Footer;