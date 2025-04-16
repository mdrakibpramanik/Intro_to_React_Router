import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h3 className='font-semibold text-xl  mt-6'>This is Users Page</h3>
            <div className='font-semibold  text-xl'>
                {
                    users.map(user => <User key={user.id}  user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;