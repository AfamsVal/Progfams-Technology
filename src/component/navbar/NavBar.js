import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
   
    <nav className="navbar navbar-expand-sm  navbar-dark fixed-top" style={{backgroundColor:"#0E1924"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{fontWeight:"bold",paddingLeft:"35px",fontSize:"28px"}}>Progfams</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item nav-spacing">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item nav-spacing">
            <Link className="nav-link" to="/course">Courses</Link>
          </li>
          <li className="nav-item nav-spacing">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          {/* <li className="nav-item dropdown nav-spacing">
            <Link className="nav-link dropdown-toggle" to="/service"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/">Trainings</Link></li>
              <li><Link className="dropdown-item" to="/">Consulting</Link></li>
              <li><Link className="dropdown-item" to="/">Content Creation</Link></li>
              <li><Link className="dropdown-item" to="/">Digital Marketing</Link></li>
              <li><Link className="dropdown-item" to="/">Web Development</Link></li>
            </ul>
          </li> */}
          <li className="nav-item nav-spacing">
            <Link className="nav-link"to="/faq">FAQ</Link>
          </li>
          <li className="nav-item nav-spacing">
            <Link  className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item nav-spacing">
            <Link  className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar