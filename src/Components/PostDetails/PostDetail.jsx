import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();

    const navigate = useNavigate();


    return (
        <div>
            <h2 className='text-violet-800 font-bold mt-4 text-xl'>{post.title}</h2>
            <p className='font-semibold text-xl text-blue-700  mt-2'>{post.body}</p>
            <button onClick={() => navigate(-1)} className='text-red-600  font-bold mt-2'>Go Back</button>
        </div>
    );
};

export default PostDetail;