import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';


const Header = () => {
    return (
        <div>
            <h2 className='font-semibold  text-3xl mb-3 text-blue-800'>This is <span className='text-black'>Header</span></h2>
            <nav className='font-semibold  pl-10'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                

                <NavLink to="/posts">Posts</NavLink>

                {/* <a href="/" >Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a>
                <a href="" ></a> */}
            </nav>
        </div>
    );
};

export default Header;