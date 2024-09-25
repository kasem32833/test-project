import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const Dashboard = () => {
    const [user, setUser] = useState([]);
    console.log(user);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    
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