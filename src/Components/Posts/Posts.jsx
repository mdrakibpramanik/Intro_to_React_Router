import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();


    return (
        <div>
            <h2 className='font-bold  text-violet-800  mt-8 text-xl'>These are My Posts: {posts.length}</h2>

            <div>
                {
                    posts.map(post => <Post key={post.id}  post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;