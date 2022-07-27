import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
// import CourseMenu from "./CourseMenu";
const Course = () => {
     
  return (
    <div style={{ backgroundColor: "#0E1924",paddingTop: "8rem" }}>
      {/* <CourseMenu/> */}
      <div class="row mx-5 mb-3" >
        <div class="col-12 col-md-12 p-3">
          <div class="row d-flex justify-content-around ">
            <div class="col-6 col-md-8">
              <span className="text-lighter px-2 font-weight-bold">ALL</span>
              <span class=" text-white badge frontend p-2">108</span>
            </div>
            <div class="col-6 col-md-4">
              <div class="dropdown">
                <span
                  className=" dropdown-toggle text-light rounded mx-auto py-3 px-5 border border-warning filter"
                  to="/service"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  FILTER BY TYPE
                </span>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Trainings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Content Creation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseCard />
    </div>
  );
};

export default Course;
