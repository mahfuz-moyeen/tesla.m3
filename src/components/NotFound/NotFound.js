import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../image/pageNotFound.png'

const NotFound = () => {
    return (
        <div className=' h-screen flex items-center'>
            <div className='w-4/12 mx-auto'>
            <img className='' src={Notfound} alt="" />
            <div className='flex flex-col items-center'>
            <h1 className='text-center text-2xl font-mono font-bold my-2'>SORRY PAGE NOT FOUND</h1>
            <p className='text-center text-lg font-semibold'>
            <Link to={'/'}>
                <span className=' text-orange-400 hover:text-orange-600 flex gap-4 items-center'><ArrowLeftIcon className='w-6 h-6'/> <span>Back to home</span></span>
                </Link>
            </p>
            </div>
        </div>
        </div>
    );
};

export default NotFound;