import React, { useContext, } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    console.log(user);

    const handleLogOut = ()=>{
      logOut();
    }

  return (
    <div className="w-[1200px] mx-auto  ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/" className="text-violet-700 text-2xl">Design Hub</NavLink>
        </div>
        {
            user ? <div className="flex-none gap-2">
            <div>
                <ul>
                <li>
                  <button className="" onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          </div> : <NavLink to="/login">Login</NavLink>
        }
      </div>
      
    </div>
  );
};

export default Header;
