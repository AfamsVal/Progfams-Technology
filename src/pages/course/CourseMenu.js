import React from 'react'
import { Link } from "react-router-dom";


const CourseMenu = ({store,all,courseTitle}) => {
  return (
    <div className="row mx-5">
        <div className="col-12 col-md-5">
          
            <ul   className="col-md-12 col-12 text-lighter breadcrumb ">
              <li>
                <Link to="/">{}Store</Link>
              </li>
              <li>
                <Link to="/">{}All</Link>
              </li>
              <li>
                <Link to="/">{}Courses</Link>
              </li>
            </ul>
          
          {/* <h2 className="text-white">Search results for "All"</h2> */}
        </div>
      </div>
  )
}

export default CourseMenu