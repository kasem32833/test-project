import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg text-red-500"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace ></Navigate>

    
};

export default PrivateRoutes;