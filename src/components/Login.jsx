import {  useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";



const Login = () => {

  const {logIn} = useContext(AuthContext);


  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handeleLogin = (e)=>{
    e.preventDefault()

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    logIn(email, password)
    .then(result =>{
      console.log(result.user.email);
    })
    .catch(error =>{
      console.log(error);
    })

    console.log('User login Successfully',  password);

  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row  mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In to Start Your Business</h1>
            <p className="py-6">
              If your don't have account please <NavLink to="/register" className="text-violet-700">Register</NavLink> Here
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> 
              </div>
              <div className="form-control mt-6">
                <button onClick={handeleLogin} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
