import React from "react";
import { NavLink } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-between  py-4 px-8 ">
        <p>Copyright &copy; Abul Kasem 2024 All right reserved</p>
        <div className="flex gap-4">
          <NavLink>Website Terms</NavLink>
          <NavLink>Privacy Policy</NavLink>
          <NavLink>Cookies Policy</NavLink>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
