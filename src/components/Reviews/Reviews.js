import React from 'react';
import useFood from '../../hooks/useFood';
import FoodReviews from '../FoodReviews/FoodReviews';

const Reviews = () => {
    const [foods, setFoods] = useFood();
    return (
        <div className='customer-reviews'>
                <h1 style={{textAlign:"center" , fontSize:"45px"}}>Customer Reviews (3)</h1>
                <div className='reviews-container'>
                    {
                        foods.map(food => <FoodReviews
                            key={food.id}
                            food={food}
                        ></FoodReviews>)
                    }
                </div>
            </div>
    );
};

export default Reviews;

