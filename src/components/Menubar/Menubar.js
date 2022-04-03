import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <nav className='md:w-11/12 mx-auto flex gap-3 justify-between'>
            <div>
            <Link to={'/'}>Tesla.M3</Link>
            </div>
            <div className='flex gap-5'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/reviews'}>Reviews</Link>
            <Link to={'/dashBoard'}>DashBoard</Link>
            <Link to={'/blogs'}>blogs</Link>
            <Link to={'/about'}>about</Link>
            </div>
        </nav>
    );
};

export default Menubar;