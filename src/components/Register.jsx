
import React, { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {register, user} = useContext(AuthContext);

  const navigate = useNavigate();

  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegister = (e)=>{
    e.preventDefault();
    const userName = userNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    console.log(userName, email, password, );

    
    register( email, password)
    .then(result =>{
      navigate('/');
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    })

  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Register and Stay connected with us. Register and Stay connected with usRegister and Stay connected with us
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  ref={userNameRef}
                  type="text"
                  placeholder="Type Your name Here"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
