import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className ="navbar navbar-expand-lg navbar-light my-2">
        <div className ="container">
          {/* <NavLink className ="navbar-brand py-3 h1" to={""}>Vimal Kumar</NavLink> */}
            <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
          <div className ="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <div className="navbar-area">
              <ul className ="navbar-nav mb-2 mb-lg-0">
                <li className ="nav-item">
                  <Link className ="nav-link active" aria-current="page" to={""}>Home</Link>
                </li>
                <li className ="nav-item">
                  <Link className ="nav-link" to={""}>About Us</Link>
                </li>
                <li className ="nav-item">
                  <Link className ="nav-link" to={""}>Contact Us</Link>
                </li>
              </ul>
              </div>
          </div>
        </div>
  </nav>
  )
}

export default Navbar