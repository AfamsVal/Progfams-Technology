import React from 'react'
import {Link} from "react-router-dom"
import useToast from '../../component/toast/useToast'
import { validateForm } from "../../utils/formValidator";
import imageGoogle from "../../asset/images/google.svg"


const Login = () => {
  const openNotification = useToast();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleLogin = () => {
    const { isValid, error } = validateForm(form);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    // loginAction(dispatch, form);
  };
  return (
    <div className="container-fluid auth-wrapper">
  <div className="row">
    <div className="col-12 col-md-5 mx-auto">
      <h3 className='text-light' style={{paddingTop:"5rem",fontWeight:"bold"}}>
        Sign In To Your Account
      </h3>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-md-5 mx-auto">
      <form className="row">
        <div className="form-group mb-3">
          <input type="email" name="email"
          // value={form.email}
          onChange={handleChange} 
          placeholder="Enter your email" 
          required className="form-control 
          text-center auth-input py-2" />
        </div>

       
        <div className="form-group mb-3">
          <input type="password" name="password" 
          // value={form.password}
          onChange={handleChange}
          placeholder="Enter your password" 
          required 
          className="form-control text-center 
          auth-input py-2" />
        </div>
        <div>
          <button 
           onClick={handleLogin}
           type="button"
          className="btn btn-outline-light w-100
           py-2 mt-3">
           Login{" "}
                {/* {auth.authLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} */}
          </button>
        </div>
        <div className="text-light w-100 mt-3">
        <Link to="/forgot-password" className='text-white'> <small>FORGOT PASSWORD?</small></Link>
        </div>
        <div className="my-3">or</div>
        <div>
          <button className="btn btn-light w-100 py-3 d-flex align-items-center justify-content-center">
            <img src={imageGoogle} alt="google logo" height={20} width={20} style={{marginRight:"4px"}} />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="mt-3">
          Don't have an account?
          <Link to="/register"style={{fontSize:"12px",padding:"8px"}}>SIGN UP</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login