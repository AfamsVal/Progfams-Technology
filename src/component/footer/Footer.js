import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
    <footer className="text-justify text-lg-start text-white p-3 footer"  style={{backgroundColor:"#45526e"}}>
  {/*Grid row*/}
  <div className="row">
    {/* Grid column */}
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text-uppercase text-light mb-4 font-weight-bold">
        Progfams Tech.
      </h5>
      <p>
        Here you can use rows and columns to organize your footer
        content. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
      </p>
    </div>
    {/* Grid column */}
    <hr className="w-100 clearfix d-md-none" />
    {/* Grid column */}
    <div className="col-6 col-md-2 mx-auto mt-3">
      <h6 className="text-uppercase text-light mb-4 font-weight-bold">Products</h6>
      <p>
        <Link to="/" className="text-white">Trainings</Link>
      </p>
      <p>
        <Link to="/" className="text-white">Consultantcy</Link>
      </p>
      <p>
        <Link to="/" className="text-white">Web Development</Link>
      </p>
      <p>
        <Link to="/" className="text-white">Digital Marketing</Link>
      </p>
    </div>
    {/* Grid column */}
    {/* Grid column */}
    <div className="col-6 col-md-3 mx-auto mt-3">
      <h6 className="text-uppercase text-light mb-4 font-weight-bold">
        Useful links
      </h6>
      <p>
        <Link to="/course" className="text-white"> Courses</Link>
      </p>
      <p>
        <Link to="/service" className="text-white">Services</Link>
      </p>
      <p>
        <Link to="/" className="text-white">About</Link>
      </p>
      <p>
        <Link to="/faq" className="text-white">FAQ</Link>
      </p>
    </div>
    {/* Grid column */}
    <hr className="w-100 clearfix d-md-none" />
    {/* Grid column */}
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 className="text-uppercase  text-light mb-4 font-weight-bold">Contact</h6>
      <p><i className="fas fa-home mr-3" /> Lagos, Nigeria</p>
      <p><i className="fas fa-envelope mr-3" /> info@progfams.com</p>
      <p><i className="fas fa-phone mr-3" /> +2348037514469</p>
      <p><i className="fas fa-print mr-3" /> +2348030000000</p>
    </div>
    {/* Grid column */}
  </div>
  {/*Grid row*/}
  {/* Section: Links */}
  <hr className="my-3" />
  {/* Section: Copyright */}
  <section className="p-3 pt-0">
    <div className="row d-flex align-items-center">
      {/* Grid column */}
      <div className="col-md-7 col-lg-8 text-center text-md-start">
        {/* Copyright */}
        <div className="p-3">
          © 2022 Copyright:
          <a className="text-white" href="https://progfams.com/">progfams.com</a>
        </div>
        {/* Copyright */}
      </div>
      {/* Grid column */}
      {/* Grid column */}
      {/* <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"> */}
        {/* Facebook */}
        {/* <Link className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></Link> */}
        {/* Twitter */}
        {/* <Link className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></Link> */}
        {/* Google */}
        {/* <Link className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></Link> */}
        {/* Instagram */}
        {/* <Link className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></Link> */}
      {/* </div> */}
      {/* Grid column */}
    </div>
  </section>
</footer>
</div>
  )
}

export default Footer