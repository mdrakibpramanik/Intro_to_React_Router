import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className=''>
            <p className='text-normal  font-semibold text-amber-800'>Thank you for visiting our website</p>
            <div className='text-blue-600'>
                <a className='mr-5 font-semibold' href="/" >Terms</a>
                <a className='mr-5 font-semibold'  href="/" >Privacy</a>
                <a className='mr-5 font-semibold'  href="/fb" >Facebook</a>
            </div>
        </div>
    );
};

export default Footer;