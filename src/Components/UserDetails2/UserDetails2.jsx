import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const {id, name, username} = use(userPromise);
    // console.log( 'userDetails', name, username );

    return (
        <div>
            <p>{id}</p>
            <p className='font-semibold text-xl'><small>User Name: {username}</small></p>
            <p>{name}</p>
            
            
        </div>
    );
};

export default UserDetails2;