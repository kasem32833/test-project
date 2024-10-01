import {  useContext, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaGoogle } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";





const Login = () => {

  const dispatch = useDispatch();
  const registerdUser = useSelector((state)=>state.auth);

  const {logIn, user, googleLogin, loading} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handeleLogin = (e)=>{
    e.preventDefault()

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch()

    logIn(email, password)
    .then(result =>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You Have successfully login",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true});
    })
    .catch(error =>{
      // const message = error.message;
      console.log("Check Your Credentials");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Check You credentials",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  return (
    <div>
      <div className="hero bg-stone-400 min-h-screen">
        <div className="hero-content flex-col lg:flex-row  mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Sign In to Start Your Business</h1>
            <p className="py-6">
              If your don't have account please <NavLink to="/register" className="text-stone-800 bg-white px-4 py-2 w-40 rounded-full">Register</NavLink> Here
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
                
              </div>
              <div className="form-control mt-6">
                <button onClick={handeleLogin} className="btn btn-primary">Login</button>
              </div>
              
            </form>
            <div className="flex gap-1 justify-center items-center mb-6">
                <button onClick={googleLogin}>Login With Google</button>
                <FaGoogle className="text-red-500"></FaGoogle>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
