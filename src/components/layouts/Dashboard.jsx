import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { AuthContext } from '../../providers/AuthProviders';

const Dashboard = () => {
  const {user} = useContext(AuthContext);


    
    return (
      
        <div className='h-screen'>
            <Header></Header>
            <hr />
            <Sidebar></Sidebar>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;