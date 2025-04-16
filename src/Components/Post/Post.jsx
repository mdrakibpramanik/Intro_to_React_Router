import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div className='pt-2'>
            <div style={{border: '4px solid gold'}}>
                <h3 className='font-bold text-lg p-4'>{title}</h3>
                <Link to={`/posts/${id}`}>
                <button className='font-semibold bg-blue-300 rounded-sm mr-2'>Show Details</button>
                </Link>

                <button onClick={handleNavigate} className='font-semibold bg-blue-300 rounded-sm ml-2 mb-3'>Details of: {id}</button>
            </div>
        </div>
    );
};

export default Post;