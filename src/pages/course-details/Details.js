import React from "react";
import { Link } from "react-router-dom";
import image from "../../asset/images/backend2.jpeg";
// import CourseMenu from '../course/CourseMenu'
import { GiExitDoor, GiVibratingShield } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { ImDownload } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePaid } from "react-icons/md";

const Details = () => {
  return (
    <div style={{ backgroundColor: "#0E1924", marginTop: "3rem" }}>
      <div className="container-fluid aut-wrapper  text-white">
        <div className="row ">
          <div className="col-12 col-md-12 mx-auto">
            <div className="row m-0 ">
              <div className="col-12 col-md-8">
                <div className="border border-info bg-dark-100  mt-5 rounded px-4">
                  <div className="row ">
                    <div className="col-12 col-md-8">
                      <div
                        style={{
                          paddingTop: "2rem",
                          fontSize: "12px",
                          fontWeight: "lighter",
                        }}
                        className="col-md-12  col-12 breadcrumb"
                      >
                        <Link to="" className="text-white p-2">
                          Store
                        </Link>
                        <Link to="" className="text-white p-2">
                        / Courses
                        </Link>
                        <Link to="" className="text-white p-2">
                          / Digital Marketing
                        </Link>
                      </div>
                      {/* <CourseMenu store={"Store"} all={"All"} courseTitle={"Digital Marketing"}/> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10 pt-3">
                      <div>
                        <h2 className="mb-0 font-bold text-light">
                          <b>Complete Backend Developer Bootcamp</b>
                        </h2>

                        <span className="mx-2 ">Via Progfams</span>
                        <span className="badge bg-dark text-light">?</span>
                        <div className="py-4">
                          <span className="p-1 rounded-1 bg-dark">
                            <GiVibratingShield size="" />
                          </span>
                          <span className="p-1 mx-1 rounded-1 bg-dark">
                            <GiVibratingShield size="" />
                          </span>
                          <span className="p-1  rounded-1 bg-dark">
                            <GiVibratingShield size="" />
                          </span>
                          <span className="p-1 mx-1 rounded-1 bg-dark">
                            <GiVibratingShield size="" />
                          </span>
                          <span className="p-1   rounded-1 bg-dark">
                            <FcRating />
                          </span>

                          <span className="px-2">0 Reviews</span>
                        </div>
                        <div className="py-3">
                          <BiBookmark />
                          <button className="btn border mx-2   text-light">
                            <ImDownload /> Download
                          </button>
                          <button
                            type="button"
                            className=" text-light border mx-2 btn btn-outline-secondary"
                          >
                            <IoMdCheckmarkCircleOutline />
                            Mark complete
                          </button>
                          <button className="btn btn-primary">
                            Write review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  mt-3 rounded pb-4 px-4 mx-1">
                  <div className="col-md-12 pt-5">
                    <h2 className="text-light">
                      <strong>Overview</strong>
                    </h2>
                        <hr/>
                    <p className="text-justify">
                      I will be your lead trainer in this course. Within no
                      time, I will help you understand the subject in an easy
                      manner. I have a huge experience in online training and
                      recording videos. Lets get started!
                    </p><div className="py-2">
                    <h2 className="text-light">
                      <strong>What you'll learn:</strong>
                    </h2>
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        Du lernst, wie man eine eigene Theme-Konfiguration
                        erstellt.
                      </li>
                      <li>
                        Du lernst, wie man eine eigene Theme-Konfiguration
                        erstellt.
                      </li>
                      <li>
                        Du lernst, wie man eine eigene Theme-Konfiguration
                        erstellt.
                      </li>
                    </ul>
                    </div>
                    <div className="py-3">
                    <h3 className="text-light">
                      <strong>Digital Marketing full stack crash course</strong>
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorem voluptatum enim nulla dicta? Numquam dolore
                      aliquam labore ipsum deleniti, praesentium nostrum dolorum
                      esse repudiandae reprehenderit delectus iste in tenetur,
                      voluptatem rem magni officiis odit ab. Soluta eos officiis
                      quo quaerat corporis, reiciendis, consequatur quae
                      voluptates tempore maiores, magni placeat commodi?
                    </p>
                    <button
                      type="button"
                      className=" text-light border mx-2 btn btn-outline-secondary"
                    >
                      Read More <FiChevronDown />
                    </button>
                    </div>
                  </div>
                </div>
                <div className="row frontend text-lighter  mt-3 rounded px-4 mx-1">
                  <div className="col-12 col-md-10 py-3">
                    <h2 className="text-lighter">Frequently Asked Questions</h2>
                    <ol>
                      <li>
                        <p>
                          {" "}
                          <strong>
                            When does this course start and finish?
                          </strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi quasi asperiores nulla incidunt
                          voluptates. Molestias veritatis distinctio a facilis
                          earum.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>What does this course includes?</strong>
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt excepturi in quo dolores voluptatum
                          quibusdam, velit voluptates deserunt neque
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>What does this course includes?</strong>
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt excepturi in quo dolores voluptatum
                          quibusdam, velit voluptates deserunt neque
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>What does this course includes?</strong>
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt excepturi in quo dolores voluptatum
                          quibusdam, velit voluptates deserunt neque
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>What does this course includes?</strong>
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt excepturi in quo dolores voluptatum
                          quibusdam, velit voluptates deserunt neque
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>What does this course includes?</strong>
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nesciunt excepturi in quo dolores voluptatum
                          quibusdam, velit voluptates deserunt neque
                          accusantium.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-4 border border-info rounded  fixed-left"
                style={{ marginTop: "3rem",backGround:"red",height:"700px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="digital-side" style={{ marginTop: "1rem" }}>
                      <div className="card-blo mx-3">
                        <div>
                          <img
                            className="w-100 pt-2"
                            style={{ borderRadius: "10px" }}
                            src={image}
                            alt="not found"
                          />
                          <div className="d-grid">
                            <button
                              type="button"
                              className="btn btn-primary btn-block mt-2"
                            >
                              Go To Class <GiExitDoor />
                            </button>
                          </div>
                        </div>
                        <div className="my-3 ">
                          <p className="m-0 ">
                            <Link to="">
                              {" "}
                              <span
                                className="mx-2 text-light "
                                title="youtube course"
                              >
                                {" "}
                                Progfams
                              </span>
                              <span className="badge p-1 bg-secondary text-light">
                                ?
                              </span>
                            </Link>
                          </p>
                          <hr className="m-1 " />
                          <p className="m-0 ">
                            <Link to="">
                              {" "}
                              <span
                                className="mx-2 text-light "
                                title="Free Course"
                              >
                                <MdOutlinePaid className="text-warning " /> Free
                                Online Course
                              </span>
                            </Link>
                          </p>
                          <hr className="m-1 " />
                          <p>
                            <i className="" />
                            100 Days Validity
                          </p>
                          <div className="d-flex align-items-center">
                            <span>
                              <Link to="">
                                <span className="purp border p-2 text-light border-warning">
                                  BUY NOW
                                </span>
                              </Link>
                            </span>
                            <span>
                              <Link to="">
                                <span className="purp border mx-1 p-2 text-light border-warning hover:bg-warning">
                                  START A FREE TRIAL
                                </span>
                              </Link>
                            </span>
                          </div>
                        </div>
                        <div
                          className="card-footer p-3 font-16"
                          style={{ fontSize: "16px" }}
                        >
                          <h3 className="text-white">What's Included</h3>
                          <p className="m-0 ">
                            <b>155</b> Lessons
                          </p>
                          <hr className="m-0 " />
                          <p className="m-0 ">
                            <b>4</b> Tests
                          </p>
                          <hr className="m-0 " />
                          <p className="m-0 ">
                            <b>2</b> Trial Lessons
                          </p>
                          <hr className="m-0 " />
                          <p className="m-0 ">
                            <i className="fa fa-solid fa-check" /> <b>Online</b>{" "}
                            Accessibility
                          </p>
                          <hr className="m-0 " />
                          <Link to="" className="text-warning">
                            <FaShare /> Share this Course
                          </Link>
                          <hr className="m-0 " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
