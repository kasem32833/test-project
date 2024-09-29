import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { AuthContext } from '../../providers/AuthProviders';
import Users from '../Users';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
      
        <div className='h-screen mt-24'>
            <Header></Header>
            
            <div className='flex justify-between'>
                
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;