import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);

    const {userId} = useLoaderData();
    console.log(userId);

    const params = useParams();
    console.log(params.userId);

    const {website, name} = user;


    return (
        <div>
            <h3 className='font-semibold  mt-8'>User Details Here</h3>
            <h5 className='font-semibold'>Name: {name}</h5>
            <p className='font-semibold'>Website: {website}</p>
        </div>
    );
};

export default UserDetails;