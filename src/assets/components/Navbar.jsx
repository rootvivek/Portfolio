import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
    <nav className ="navbar navbar-expand-lg navbar-light">
        <div className ="container">
          <Link className ="navbar-brand py-3" to={<Home />}>Navbar</Link>
            <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
          <div className ="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className ="navbar-nav mb-2 mb-lg-0">
              <li className ="nav-item me-4">
                <Link className ="nav-link active" aria-current="page" to={""}>Home</Link>
              </li>
              <li className ="nav-item me-4">
                <Link className ="nav-link" to={""}>About Us</Link>
              </li>
              <li className ="nav-item">
                <Link className ="nav-link" to={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
  </nav>
  )
}

export default Navbar