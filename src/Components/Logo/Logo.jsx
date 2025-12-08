import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/Logo.png'

const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-end'>
                <img className="h-12 w-16" src={logo} alt="" />
                <h3 className='text-3xl font-bold -ms-4'>CivicReport</h3>
            </div>
        </Link>
    );
};

export default Logo;