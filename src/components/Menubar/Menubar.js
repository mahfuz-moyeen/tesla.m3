import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import './Menubar.css'

const Menubar = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    
    const pathCheck = () => {
        if(pathname==='/'){
            return true;
        }
        else if(pathname==='/home'){
            return true;
        }
        else if(pathname==='/reviews'){
            return true;
        }
        else if(pathname==='/dashBoard'){
            return true;
        }
        else if(pathname==='/blogs'){
            return true;
        }
        else if(pathname==='/about'){
            return true;
        }
        else{
            return false;
        }
    }
    const isPathTrue = pathCheck()
    return (
        <nav className={`bg-black ${isPathTrue ? 'block' : 'hidden'}`}>
            {/* mobile navbar  */}
            <div className={`w-11/12 mx-auto flex justify-between p-3 md:p-0`}>
                <div className="h-8 w-8 md:hidden text-white hover:text-orange-400 cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <XIcon /> : <MenuAlt1Icon />}
                </div>
                <div className='block md:hidden text-white text-xl hover:text-orange-400 font-semibold text-lg'>
                    <Link to={'/'}>Tesla.M3</Link>
                </div>
            </div>
            {/* dasktop navbar  */}
            <div className='md:w-11/12 mx-auto flex gap-3 justify-between items-center font-semibold text-lg md:p-4'>
                <div className='hidden md:block text-white text-xl hover:text-orange-400'>
                    <Link to={'/'}>Tesla.M3</Link>
                </div>
                <div className={`link-title  bg-black flex md:gap-3 py-3 md:py-2 flex-col md:flex-row items-center justify-end md:static w-full absolute ${open ? 'top-10' : 'top-[-200px]'}`}>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/reviews'}>Reviews</CustomLink>
                    <CustomLink to={'/dashBoard'}>DashBoard</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;