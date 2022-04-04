import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    let navigate = useNavigate();
    const [reviews, setReviews] = useReviews()
    const newReviews = [...reviews.slice(0, 3)]
    return (
        <div>
            {/* banner section  */}
            <Header/>
            
            {/* Customer reviews section  */}
            <div className='w-11/12 mx-auto my-10'>
                <h1 className='text-3xl md:text-4xl text-center font-semibold my-10'><span className='border-b-2 border-b-orange-400'>Customer <span className=' text-orange-400'>Reviews</span></span></h1>
                <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 py-10'>
                    {
                        newReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        />)
                    }
                </div>
                <div className='flex justify-center'>
                <button onClick={()=>navigate('reviews')} className=' bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded-lg'>See more Reviews</button>
                </div>
            </div>

        </div>
    );
};

export default Home;