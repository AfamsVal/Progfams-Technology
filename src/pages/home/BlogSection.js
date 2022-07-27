import React from 'react'
import image from "../../asset/images/anup.webp"
import image2 from "../../asset/images/maddali.webp"
import image3 from "../../asset/images/kubernetes.webp"
const BlogSection = () => {
  return (
    <>
     <div>
  <div className="row mt-6 mx-5">
    <div className="col-12 col-md-7">
      <h1 className="text-white" style={{fontWeight:"bold"}}>People love to learn code from Progfams.</h1>
      <p className="pt-4 text-grey">People from following companies/universities are <br /> registered with us and are active learners</p>
    </div>
    <div className=" col-12 col-md-6 ">
      <div className="row mx-1 mx-md-0">
        <div className="col-12 col-md-11 roll p-3 mb-2">
          <div className="d-flex">
            <div className="testimony-box">
              <img src={image} className="w-100" alt="not found" />
            </div>
            <div style={{paddingLeft:"20px"}}>
              <h5>ANUP KUMAR MAURYA</h5>
              <h6 className="text-grey">CSJM UNIVERSITY, KANPUR</h6>
            </div>
          </div>
          <p className="py-3 text-grey">You prepare people to carry out skills in the real world. Keep up the good work. What I have learned from the course at LCO, makes me stand out in this competitive world.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 ">
      <div className="row mx-1 mx-md-0">
        <div className="col-12 col-md-11 roll p-3 mb-2">
          <div className="d-flex">
            <div className="testimony-box">
              <img src={image2} className="w-100" alt="not found" />
            </div>
            <div style={{paddingLeft:"20px"}}>
              <h5>ANUP KUMAR MAURYA</h5>
              <h6 className="text-grey">CSJM UNIVERSITY, KANPUR</h6>
            </div>
          </div>
          <p className="py-3 text-grey">You prepare people to carry out skills in the real world. Keep up the good work. What I have learned from the course at LCO, makes me stand out in this competitive world.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row my-6 mx-5">
    <div className="col-12">
      <h2 className="text-light"><strong>Our Blogs and Articles</strong></h2>
      <p className="text-light mt-3">A place to Learn, teach and discuss about code. Contribute and get rewarded. <br /> Serving coding community is our number 1 priority</p>
    </div>
    <div className="row text-light">
      <div className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
        <div className="card-blog">
          <img className="w-100" src={image3} alt="not found" />
          <div className="my-3 px-2">
            <h4 className="card-title my-3 font-weight-bold">Afams Ahsan Khan</h4>
            <div className="card-text">
              Tawshif is a web designer living in Bangladesh is not good and fine. Tawshif is a web designer living in Bangladesh.
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center border-top border-warning">
            <small><i className="fa fa-calendar" aria-hidden="true" />  <small className="ml-2">3 mins ago</small></small>
            <button className="but btn-sm"><i className="fa fa-file-text" aria-hidden="true" /> Read More</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
        <div className="card-blog">
          <img className="w-100" src={image3} alt="not found"/>
          <div className="my-3 px-2">
            <h4 className="card-title my-3 font-weight-bold">Afams Ahsan Khan</h4>
            <div className="card-text">
              Tawshif is a web designer living in Bangladesh is not good and fine. Tawshif is a web designer living in Bangladesh.
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center border-top border-warning">
            <small><i className="fa fa-calendar" aria-hidden="true" />  <small className="ml-2">3 mins ago</small></small>
            <button className="but btn-sm"><i className="fa fa-file-text" aria-hidden="true" /> Read More</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
        <div className="card-blog">
          <img className="w-100" src={image3} alt="not found"/>
          <div className="my-3 px-2">
            <h4 className="card-title my-3 font-weight-bold">Afams Ahsan Khan</h4>
            <div className="card-text">
              Tawshif is a web designer living in Bangladesh is not good and fine. Tawshif is a web designer living in Bangladesh.
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center border-top border-warning">
            <small><i className="fa fa-calendar" aria-hidden="true" />  <small className="ml-2">3 mins ago</small></small>
            <button className="but btn-sm"><i className="fa fa-file-text" aria-hidden="true" /> Read More</button>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>   
    </>
  )
}

export default BlogSection