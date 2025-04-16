import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';





const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false);

    const location = useLocation();
    console.log(location);

    const {id, name, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());


    const userStyle = {
        border: '5px solid gold',
        borderRadius: '16px',
        padding: '20px',
        margin: '20px',
    }

    if (visitHome) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div style={userStyle} className='mr-3'>
            <h3 className='font-semibold text-lg mb-2'>Name: {name}</h3>
            <p className='font-semibold '>Email: {email}</p>
            <p className='font-semibold  mb-2'><small>Phone: {phone}</small></p>
            <div>
                <Link to={`/users/${id}`} className='border-0 bg-blue-400  text-sm rounded mr-2'>Show</Link>
            </div>
            <button onClick={() => setShowInfo(!showInfo)} className='border-0 bg-blue-400 text-sm rounded mr-2'>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }

            <button onClick={() => setVisitHome(true)} className='border-0 bg-blue-400 text-sm rounded'>Back Home</button>
        </div>
    );
};

export default User;