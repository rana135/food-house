import React from 'react';
import useFood from '../../hooks/useFood';
import CustomLink from '../CustomLink/CustomLink';
import FoodReviews from '../FoodReviews/FoodReviews';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css';

const Home = () => {
    const [foods, setFoods] = useFood();
    return (
        <div>
            <div>
                <div className='foods'>
                    <div className='food'>
                        <p><strong>Your next food</strong></p>
                        <p className='best-food'><strong>Your best food</strong></p>
                        <p>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier.</p>
                        <button className='btn'>Live demo</button>
                    </div>
                    <div>
                        <img src='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1649010536~exp=1649011136~hmac=9b2b54c8e30e2081ff18d070c149a178fc8f9447c63efcfb346fc4f2ab381ed1&w=740' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='customer-reviews'>
                <h1 style={{textAlign:"center" , fontSize:"45px"}}>Customer Reviews (3)</h1>
                <div className='reviews-container'>
                    {
                        foods.map(food => <HomeReview
                        key={food.id}
                        food={food}
                        ></HomeReview>)
                    }
                </div>
                <CustomLink to='/reviews'> <button className='all-reviews'>See All Reviews</button></CustomLink>
            </div>
        </div>
    );
};

export default Home;