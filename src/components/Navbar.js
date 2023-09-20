import React from 'react'
import logo from './logo.png'
import '../index.css';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top"   >
            <img src={logo} alt="" style={{width:'100px'}} className="logo"/>
        <div className="container-fluid " >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav " >
                <li className="nav-item ">
                <a className="nav-link text-[#7ae0ff] " aria-current="page" href="#" >Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-[#7ae0ff]" aria-current="page" href="#About"  >About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-[#7ae0ff]" aria-current="page" href="#Skills">Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-[#7ae0ff]" aria-current="page" href='#project'>Project</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-[#7ae0ff]" aria-current="page" href='#contact'>Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
