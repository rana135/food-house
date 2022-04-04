import React from 'react';

const HomeReview = ({food}) => {
    const { picture, name, reviews, ratings } =food;
    
    return (
        <div className='reviews-all'>
            <div>
                <div className='food-reviews'>
                    <img src={picture} alt='' />
                    <div className='review-details'>
                        <h4>{name}</h4>
                        <h6>Ratings: {ratings}</h6>
                    </div>
                </div>
                <div>
                    <p className='reviews'><small>{reviews}</small></p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;