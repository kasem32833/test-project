
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/users/usersSlice';




const Edit = () => {
    const users = useSelector((state) =>state.users);
    const {id} = useParams();
    const filteredArr = users.filter(user => user.id == id);
    const editingObj= filteredArr[0];
    const {name, email} = editingObj;
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUpdate = e =>{
        e.preventDefault();
        dispatch(updateUser({
          id: id,
          name: editedName,
          email: editedEmail
        }))
        navigate('/dashboard')
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Edit Your Clients Details</h1>
            <p className="py-6">
              You can manage your client form Here
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onChange={e=>setEditedName(e.target.value)}  value={editedName} type="text" placeholder="Type your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={e=>setEditedEmail(e.target.value)} value={editedEmail} type="email" placeholder="email" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Edit;