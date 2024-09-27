import React from "react";
import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";

const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="grid gap-4  my-8">
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
