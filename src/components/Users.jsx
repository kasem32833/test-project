import React from "react";
import { useSelector } from "react-redux";
import { ImBin2 } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Users = () => {
  const users = useSelector((state) => state.users);


  return (
    <div className="">
      <div className="w-[1200px] mx-auto flex justify-around items-center pt-4">
        <h3 className="text-xl mb-2">Our Valuable Customers</h3>
        <NavLink to="/create" className="bg-stone-900 text-white px-4 py-2  rounded-full">
          +Add New User
        </NavLink>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
            //   <SingleUser user={user} key={user.map}></SingleUser>
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.email}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs"><ImBin2></ImBin2></button>
          <button className="btn btn-ghost btn-xs"><FiEdit></FiEdit></button>
        </th>
      </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
