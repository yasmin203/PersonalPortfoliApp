import React from 'react'
import '../App.css'
// import logo from "../logo.png"
// <img src={logo} className='logo' alt='logo' />
function Navbar() {
    return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className='container'>
        <a className="navbar-brand" href="#"><i className="fas fa-laptop-code"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-ellipsis-v"></i>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  menu">
      <li className="nav-item active">
            <a className="nav-link" href="#home">Home </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#tools">Tools</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
            </li>
    </ul>
 
  </div>
  </div>
</nav>
    )
}
export default Navbar