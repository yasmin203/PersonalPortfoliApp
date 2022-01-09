import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
function Navbar() {
    return (
<nav className="navbar fixed-top navbar-expand-lg  bg-dark">
    <div className='container'>
        <NavLink className="navbar-brand" to="#"><i className="fas fa-laptop-code"></i></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-ellipsis-v"></i>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  menu">
      <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/skills">Skills</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/tools">Tools</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
    </ul>
 
  </div>
  </div>
</nav>
    )
}
export default Navbar