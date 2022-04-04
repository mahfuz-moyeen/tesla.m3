import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews ,setReviews] = useReviews()  
    return (
        <div>
            <h1 className='text-3xl md:text-4xl text-center font-semibold my-14'><span className='border-b-2 border-b-orange-400'>
                What <span className=' text-orange-400'> Our Customer</span> Say!</span>
            </h1>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 py-10'>
                {
                    reviews.map(review=> <Review
                    key={review.id}
                    review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;