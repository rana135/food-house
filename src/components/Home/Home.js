import React from 'react';
import useFood from '../../hooks/useFood';
import FoodReviews from '../FoodReviews/FoodReviews';
import './Home.css';

const Home = () => {
    const [foods, setFoods] = useFood();
    return (
        <div className='reviews-container'>
            {
                foods.map(food => <FoodReviews
                key={food.id}
                food={food}
                ></FoodReviews>)
            }
        </div>
    );
};

export default Home;