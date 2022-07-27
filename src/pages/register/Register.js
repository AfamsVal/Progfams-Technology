import React from "react";
import imageGoogle from "../../asset/images/google.svg"
import {Link} from "react-router-dom"
// import useToast from '../../component/toast/useToast'
// import { validateForm } from "../../utils/formValidator";


const Register = () => {
    
        // const openNotification = useToast();
        // const navigate = useNavigate();
        // const { auth, dispatch } = useAppSelector();
      
        // useEffect(() => {
        //   if (auth.authError) {
        //     openNotification("Registration Failed:", auth.authError, "error");
        //     clearAuthError(dispatch);
        //   }
      
        //   if (auth.isRegister) {
        //     openNotification(
        //       "Registration Success:",
        //       "Account created successfully",
        //       "success"
        //     );
        //     setTimeout(() => navigate("/login"), 1000);
        //   }
        // }, [auth.authError, auth.isRegister, dispatch, navigate, openNotification]);
      
        const [form, setForm] = React.useState({
          firstName: "",
          lastName: "",
          email: "",
          
          password: "",
         
        });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
    //   const handleRegister = () => {
    //     const { isValid, error } = validateForm(form);
    //     if (!isValid) {
    //       openNotification(error.title, error.value, "error");
    //       return false;
    //     }
    
        // registerAction(dispatch, form);
    //   };
  return (
    <div className="container-fluid auth-wrapper">
  <div className="row">
    <div className="col-12 col-md-5 mx-auto ">
      <h3 className="text-light" style={{paddingTop:"5rem",fontWeight:"bold"}}>
        Create Account Today
      </h3>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-md-5 mx-auto">
      <form className="row">
        <div className="col-12 col-md-6 form-group mb-3">
          <input type="text" 
          onChange={handleChange}
          value={form.firstName} name="firstName" placeholder="Enter First Name" required className="form-control text-center auth-input py-3" />
        </div>
        <div className="col-12 col-md-6 form-group mb-3">
          <input type="text"  onChange={handleChange}
                    value={form.lastName} name="lastName" placeholder="Enter Last Name" required className="form-control text-center auth-input py-3" />
        </div>
        <div className="col-12 form-group mb-3">
          <input type="email" onChange={handleChange}
                    value={form.email} name="email" placeholder="Enter your email" required className="form-control text-center auth-input py-3" />
        </div>
        <div className="form-group mb-3">
          <input type="password" onChange={handleChange}
                    value={form.password} name="password" placeholder="Enter your password" required className="form-control text-center auth-input py-3" />
        </div>
        <div>
          <button className="btn btn-outline-light w-100 py-3 mt-3">
            SIGN UP
          </button>
        </div>
        <div className="my-3">or</div>
        <div>
          <button className="btn btn-light w-100 py-3 d-flex align-items-center justify-content-center">
            <img src={imageGoogle} alt="google logo" height={20} width={20} style={{marginRight:"4px"}} />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="mt-3">
          Already have an account?
          <Link to="/login" style={{FontSize:"12px",padding:"8px"}}>LOGIN</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register