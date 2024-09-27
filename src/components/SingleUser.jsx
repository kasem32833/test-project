import React from "react";

const SingleUser = ({user}) => {

  const {name, id, email}  = user;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p>Email: {email}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
