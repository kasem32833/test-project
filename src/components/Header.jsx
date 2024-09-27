import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="bg-stone-900 py-4">
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
                    <button className="" onClick={handleLogOut}>
                      Log Out
                    </button>
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
