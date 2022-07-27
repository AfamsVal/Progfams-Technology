import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="container-fluid pt-5 auth-wrapper">
    <div className="row ">
      <div className="col-12 col-md-5 mx-auto">
        <h3  style={{paddingTop:"5rem",fontWeight:"bold"}}>
          Recover Your Account
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-5 mx-auto">
        <form className="row">
          <div className="form-group mb-3">
            <input type="email" name="email"
            // value={form.email}
            // onChange={handleChange} 
            placeholder="Enter your email" 
            required className="form-control 
            text-center auth-input py-2" />
          </div>
  
         
         
          <div>
            <button 
            //  onClick={handleLogin}
             type="button"
            className="btn btn-outline-light w-100
             py-2 mt-3">
             Recover{" "}
                  
            </button>
          </div>
         
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword