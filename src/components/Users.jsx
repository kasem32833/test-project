import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const Users = () => {
    
    const users = useSelector((state)=>state.users)

    return (
        <div className='grid gap-4 grid-cols-3'>
            {
                users.map(user => <SingleUser user={user} key={user.map}></SingleUser>)
            }
        </div>
    );
};

export default Users;