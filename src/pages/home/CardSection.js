import React from "react";
import image from "../../asset/images/digital2.png";
import image2 from "../../asset/images/frontend2.png";
import image3 from "../../asset/images/backend.png";
import image4 from "../../asset/images/ui2.png";
import image5 from "../../asset/images/frontend2.png";
import image6 from "../../asset/images/kid.webp";
import image7 from "../../asset/images/code.png";
import image8 from "../../asset/images/me.png";
import image9 from "../../asset/images/loan.webp";
import image10 from "../../asset/images/val.jpeg";
import imageEvent from "../../asset/images/event3.png";
import { Link } from "react-router-dom";

const CardSection = () => {
  return (
    <>
      <div className="row py-2 mx-5">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="digital course-card">
            <div className="row p-3 d-flex  justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">
                  Know More about Digital Marketing
                </h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image} className="mt-2 w-100" alt="not  found" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="frontend course-card">
            <div className="row p-3 d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">Modern Frontend Web Development</h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image2} className="mt-2 w-100" alt="not found" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="backend course-card">
            <div className="row p-3 d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">Modern Backend Developer Course</h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image3} className="mt-2 w-100" alt="not found" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="ui-ux course-card">
            <div className="row p-3 d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">Know More about UI/UX Design</h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image4} className="mt-2 w-100" alt="not found" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="mobile-app course-card">
            <div className="row p-3 d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">Learn Mobile App Development</h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image5} className="mt-2 w-100" alt="not found" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="coding-kids course-card">
            <div className="row p-3 d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <h4 className="text-white">Standard Coding For Kids</h4>
                <Link to="/" className="now btn mt-2">
                  Enroll Now
                </Link>
              </div>
              <div className="col-md-5 course-card-img">
                <img src={image6} className="mt-2 w-100" alt="not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5 mx-5">
        <div className="col-12 mx-auto goes text-white my-5">
          <div className="row ">
            <div className="col-12 col-md-6 py-4 px-5">
              <h2 className="py-3 font-18 font-weight-bold">What you get</h2>
              <h4 className="py-2">
                <b>Industry Relevant Content</b>
              </h4>
              <p style={{ fontSize: "16px" }}>
                We gather the best minds available in your field, content you{" "}
                <br /> get while with us will be cut right for you.
              </p>
              <h4 className="py-2">
                <b>Career Growth</b>
              </h4>
              <p style={{ fontSize: "16px" }}>
                You will be amazed at how far you would have gone when you{" "}
                <br /> are done with our courses, you would have gained the{" "}
                <br /> experience to take the next step in your career.
              </p>
              <h4 className="py-2">
                <b>Real-World Projects</b>
              </h4>
              <p style={{ fontSize: "16px" }}>
                Each course comes with projects that can enrich your and get you
                a job.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-10 col-xl-8 mx-auto side mt-10">
                  <div className="picture" />
                  <h2 className="text-dark py-2 mt-4">Afams Val O.</h2>
                  <div style={{ color: "orangered" }}>
                    <span>
                      <i className="fa fa-star p-1" />
                    </span>
                    <span>
                      <i className="fa fa-star p-1" />
                    </span>
                    <span>
                      <i className="fa fa-star p-1" />
                    </span>
                    <span>
                      <i className="fa fa-star p-1" />
                    </span>
                    <span>
                      <i className="fa fa-star p-1" />
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="px-5" style={{ fontSize: "16px" }}>
                      {" "}
                      <i className="fa fa-quote-left" /> I and everyone else
                      here at Mentortribes have one goal - bringing the best
                      mentors to those who need them. From carefully creating
                      our course contents to finding the best tutor to handle
                      them, we are poised to make your career dreams come true.{" "}
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-6 mx-5">
        <div className="col-md-6">
          <img
            src={image7}
            className="img-fluid d-block"
            alt="no imgage found"
          />
        </div>
        <div className="col-md-6">
          <p className="purple">Why Choose Progfams</p>
          <h2 className="text-white">Don’t know where to start from?</h2>
          <div
            className="accordion coll accordion-flush my-5"
            id="accordionFlushExample"
          >
            <div className="accordion-item my-1 coll">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item my-1 coll">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item my-1 coll">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row discount p-4 mx-5">
        <div className="col-md-7">
          <div className="trend">Discount</div>
          <h2 className="pt-3">
            I Already Have A Tech Skill: Looking for a Job?
          </h2>
          <p className="pt-3">
            Progfams offers opportunity to help you get prepared by providing
            adequate guidaince through our professional mentors who are
            currently working in the industry.
          </p>
          <button className="but mt-4 px-5 py-3">Enroll Now</button>
        </div>
        <div className="col-md-5">
          <img src={image8} className="w-100" alt="not found" />
        </div>
      </div>
      <section className="row mt-6 mx-5">
        <div className="col-12">
          <h6 className="purple">Why Choose Progfams</h6>
          <h1 className="text-light pt-1">Our Services</h1>
          <p
            className=" col-12 col-md-8 text-light pt-2"
            style={{ fontSize: "20px" }}
          >
            {" "}
            We help companines grow there businesses through our high quality
            digital marketing services and we also develop profesional website
            that matches our client desire,growth plan{" "}
          </p>
        </div>
        <div className="row my-4">
          <div className="col-md-6">
            <div className="build row mx-1 mb-3">
              <div className="col-md-7 " style={{ padding: "25px" }}>
                <h3
                  className="sm:text-center md:text-left"
                  style={{ fontWeight: "bold" }}
                >
                  Trainings
                </h3>
                <p>
                  Event Booking App helps individuals on saving costs by
                  eliminating paper and consolidating providers.{" "}
                </p>
                <Link to="" className="view2">
                  <p className="view2">View More</p>
                </Link>
              </div>
              <div className="col-md-5">
                <img
                  src={imageEvent}
                  className="img-fluid w-100 pt-4"
                  alt="not found"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-md-0">
            <div className="builde row mx-1 mb-3">
              <div className="col-md-7" style={{ padding: "20px" }}>
                <h3  style={{ fontWeight: "bold" }}>Consulting</h3>
                <p>
                  Loan App helps in emergency situations and it can be a savior
                  because of the fast speed and minimum documentaion.
                </p>
                <Link to="" className="view2">
                  <p className="view2">View More</p>
                </Link>
              </div>
              <div className="col-md-5">
                <img src={image9} className="img-fluid" alt="not found" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row my-6 mx-5">
        <div className="col-md-7 text-light pt-3">
          <h1 className="text-light ">What makes Progfams unique</h1>
          <p className="pt-4 text-justify">
            Progfams is an online coding guide for begineers on how to code. We
            offer basic and advanced tutorials and courses. We also provide a
            flexible price range that will enale passionate people interested in
            changing your life to Enroll.When we make courses, a lot of love and
            thought goes in. For us, we present best courses that will help you
            understand more about tech.
          </p>
          <h4>Progfams- Benchmark of quality in ed-tech videos</h4>
          <Link to="/" className="check">
            <p className="check mt-5"> Check out free courses</p>
          </Link>
        </div>
        <div className="col-md-5">
          <img
            src={image10}
            style={{ borderRadius: "60px 0px 60px 60px", width: "90%" }}
            alt="not found"
          />
        </div>
      </div>
    </>
  );
};

export default CardSection;
