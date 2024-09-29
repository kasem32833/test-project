import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const users = useSelector((state) =>state.users)
    const id = useParams()
    const existingUser = users.filter(f =>f.id === id)

    const handleEdit = e =>{
        e.preventDefault();
        console.log("User edited");
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Edit Your Clients</h1>
            <p className="py-6">
              You can manage your client form Here
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleEdit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onChange={e => setClientName(e.target.value)}  type="text" placeholder="Type your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={e => setClientEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Edit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Edit;