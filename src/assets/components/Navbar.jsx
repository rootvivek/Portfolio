import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className ="navbar navbar-expand-lg navbar-light">
        <div className ="container">
          <NavLink className ="navbar-brand h1 mb-lg-0 ps-3 text-light" to={""}>VK.</NavLink>
            <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
          <div className ="collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <div className="navbar-area ms-auto">
              <ul className ="navbar-nav me-auto mb-lg-0">
                <li className ="nav-item">
                  <Link className ="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className ="nav-item">
                  <Link className ="nav-link" to='/About'>About</Link>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href='https://drive.google.com/file/d/1lllq4SsXcLPnn8NtlQD5NRmeTYDMaprH/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a>
                </li>
              </ul>
              </div>
          </div>
        </div>
   </nav>
  )
}

export default Navbar