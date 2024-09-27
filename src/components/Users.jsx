import React from "react";
import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";

const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="">
      <div className="w-[1200px] mx-auto flex justify-around items-center pt-4">
        <h3 className="text-xl mb-2">Our Valuable Customers</h3>
        <button className="bg-stone-900 text-white px-4 py-2  rounded-full">
          +Add New User
        </button>
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
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <SingleUser user={user} key={user.map}></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
