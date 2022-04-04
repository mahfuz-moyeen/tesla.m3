import React from 'react';
import Rating from 'react-rating';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <h2 className='mt-14 mb-5 text-lg font-semibold font-mono text-orange-500'>{name}</h2>
            </div>
            <div className='flex justify-between my-3'>
                <p className=' text-gray-500'>Published: {published}</p>
                    <Rating
                        initialRating={rate}
                        emptySymbol={<FontAwesomeIcon style={{ color: 'rgb(192, 192, 192)' }} icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(251 146 60)' }} icon={faStar} />}
                        readonly
                    ></Rating>
            </div>
            <div>
                <FontAwesomeIcon icon={faQuoteLeft}/>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;