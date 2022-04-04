import React from 'react';
import model3 from '../../image/model-3-02.png'


const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl md:text-5xl text-center font-semibold my-10'>Welcome to <span className=' text-orange-400'>Tesla.M3</span></h1>
                <div className='w-11/12 mx-auto my-10 grid md:grid-cols-12 grid-cols-1 gap-3 items-center'>
                    <div className='col-span-7 p-3 md:order-1 order-2 text-center md:text-left'>
                        <h1 className='md:text-5xl text-3xl font-mono font-semibold'><span className=' text-orange-400'>Tesla</span> Model 3</h1>
                        <p className='w-11/12 my-2 text-gray-600 text-xl'>What you’re looking at is the reason why a lot of car manufacturers are now scrambling to bring out as many electric vehicles (EVs) as they can before government legislation brings the hammer down on fossil-fuel powered vehicles.</p>
                        <button className='bg-orange-400 py-2 px-4 rounded my-4 hover:bg-orange-600'>Live Demo</button>
                    </div>
                    <div className='col-span-5 md:order-2 order-1'>
                        <img
                            src={model3}
                            alt="Tesla-model-3"
                            className='w-11/12 mx-auto md:w-fit transform transition duration-500 hover:scale-125' />
                    </div>
                </div>
            </div>
    );
};

export default Header;