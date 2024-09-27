import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const currentPath = location.pathname;
  console.log(currentPath);
  console.log(user);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="bg-stone-900 py-4 fixed w-full left-0 top-0 z-10">
      <div className="w-[1200px] mx-auto bg-stone-900 ">
        <div className="navbar ">
          <div className="flex-1 ">
            <NavLink to="/" className="text-white text-2xl">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          {user ? (
            <div className="flex-none gap-2 text-white">
              <div>
                <ul>
                  <li>
                    <button className="mr-6" onClick={handleLogOut}>
                      Log Out
                    </button>
                    {
                      currentPath === "/dashboard" ?  <NavLink to="/" >
                      Home
                    </NavLink> : <NavLink to="/dashboard" >
                      Dashboard
                    </NavLink>
                    }
                    
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            

            <NavLink className="text-white bg-red-500 rounded-full px-4 py-2" to="/login">Contact Us</NavLink>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
