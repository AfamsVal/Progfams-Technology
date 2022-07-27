import React from 'react'
import image from "../../asset/images/flutterwave.png"
import image2 from "../../asset/images/google.svg"
import image3 from "../../asset/images/facebook.svg"
import image4 from "../../asset/images/kuda.svg"
import image5 from "../../asset/images/paystack.png"
import image6 from "../../asset/images/revolut.svg"
import image7 from "../../asset/images/amazon4.png"
import image8 from "../../asset/images/github.svg"
import image9 from "../../asset/images/zalando.svg"
const Partners = () => {
  return (
    <div className="hub pb-5 pt-5 mx-5">
  <h2 className="text-dark text-center font-weight-bold py-2">Our Graduates Are Employed By:</h2>
  <div className="d-flex justify-content-center align-items-center flex-wrap">
    <div className="sponsor">
      <img src={image} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image2} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image3} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image4} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image5} className="w-100" alt="not found " />
    </div>
  </div>
  <div className="d-flex justify-content-center align-items-center flex-wrap">
    <div className="sponsor">
      <img src={image6} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image7} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image8} className="w-100" alt="not found " />
    </div>
    <div className="sponsor">
      <img src={image9}className="w-100" alt="not found " />
    </div> 
  </div>
</div>
  )
}

export default Partners