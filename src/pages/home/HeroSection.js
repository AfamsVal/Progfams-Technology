import React from 'react'
import {Link} from "react-router-dom"
import image from "../../asset/images/illustration-intro.png"
import image2 from "../../asset/images/SVG5.gif"
const HeroSection = () => {
  return (
    <div>
        
        <div className="row mx-5 learn">
  <div className="col-md-6 text-light">
    <h1 className="display-4 text-light" style={{fontWeight:"bold"}}>Learn How To Code Online</h1>
    <p style={{fontSize:"28px",marginTop:"20px"}}>High Quality Course at Affordable prices. We are latest in tech and highest in quality.</p>
    <p style={{color:"#ffc670",fontSize:"24px",marginTop:"20px"}}>Trusted by 300,000 Student and Professionals.</p>
    <Link to="/" className="get"><p className="get mt-5">Get Started</p></Link>
  </div>
  <div className="col-md-6">
    <img src={image} className="w-100" alt=" not found" />
  </div>
</div>
{/* trending section */}
<div className="row box px-2 px-md-5 pb-4 py-md-5 my-5 mx-5 mx-md-5">
  <div className="col-md-7">
    <div className="trend mt-5">Trending</div>
    <h2 className="pt-3">Learn React and build REST APIs  with MongoDB</h2>
    <p className="pt-2">A complete guide to understand MERN stack and master it.</p>
    <button className="but my-3 font-16 px-4 py-3">Enroll Now</button>
  </div>
  <div className="col-md-5">
    <div style={{border:"2px solid black"}}>
      <img src={image2} className="w-100" alt="not found" />
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroSection