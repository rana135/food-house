import React from 'react';
import useFood from '../../hooks/useFood';
import FoodReviews from '../FoodReviews/FoodReviews';


const Home = () => {
    const [foods, setFoods] = useFood();
    return (
        <div>
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