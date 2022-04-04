import React from 'react';

const Review = ({ review }) => {
    const { name, img, reviews, rate, published } = review
    return (
        <div className='bg-white p-4 relative rounded-lg shadow-lg' >
            <div className=''>
                <img
                    src={img}
                    alt={name}
                    className='w-20 rounded-full absolute -top-5'
                />
                <h2 className='mt-14 mb-5 text-lg font-semibold font-mono'>{name}</h2>
            </div>
            <div className='flex justify-between my-3'>
                <p>Published: {published}</p>
                <p>Rate: {rate}</p>
            </div>
            <div>
                
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;