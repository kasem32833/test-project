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
            <div className='w-[1200px] mx-auto flex justify-end'>
                <button className='bg-stone-900 text-white px-4 py-2 mt-6 rounded-full'>+Add New User</button>
            </div>
            <div className='flex justify-around'>
            <Sidebar></Sidebar>
            <Users></Users>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;