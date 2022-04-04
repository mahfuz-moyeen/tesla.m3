import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation()

    const pathCheck = () => {
        if (pathname === '/') {
            return true;
        }
        else if (pathname === '/home') {
            return true;
        }
        else if (pathname === '/reviews') {
            return true;
        }
        else if (pathname === '/dashBoard') {
            return true;
        }
        else if (pathname === '/blogs') {
            return true;
        }
        else if (pathname === '/about') {
            return true;
        }
        else {
            return false;
        }
    }
    const isPathTrue = pathCheck()
    return (
        <div className={`w-full bg-black p-10 ${isPathTrue ? 'block' : 'hidden'}`}>
                <p className='text-center text-sm text-gray-400'>Copyright || <a href="https://github.com/mahfuz-moyeen"><span className=' text-orange-300 hover:text-orange-500'>mahfuz.moyeen</span></a></p>
            </div>
    );
};

export default Footer;