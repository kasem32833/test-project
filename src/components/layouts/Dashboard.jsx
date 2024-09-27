import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { AuthContext } from '../../providers/AuthProviders';
import Users from '../Users';

const Dashboard = () => {

    return (
      
        <div className='h-screen'>
            <Header></Header>
            <hr />
            <div className='flex justify-around'>
            <Sidebar></Sidebar>
            <Users></Users>
            
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;