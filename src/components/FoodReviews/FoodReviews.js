import React from 'react';

import './FoodReview.css'

const FoodReviews = (props) => {
    const { picture, name, reviews, ratings } = props.food;
    return (
        <div className='food-container'>
            <div className='food'>
                <div className='food-reviews'>
                    <img src={picture} alt='' />
                    <div className='review-details'>
                        <h4>{name}</h4>
                        <h5>Ratings: {ratings}</h5>
                    </div>
                </div>
                <div>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodReviews;