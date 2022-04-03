import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'
import CustomLink from '../CustomLink/CustomLink';

const NotFound = () => {
    return (
        <div className='not-found-text'>
            <FontAwesomeIcon className='not-found-icon' icon={faFaceFrown}></FontAwesomeIcon>
            <h1 >404</h1>
            <h3 >Page Not found</h3>
            <p>The Page You are looking for doesn't exist or an other error occured,<br></br> Go back, or head over to <CustomLink to='/home'>food-house.com</CustomLink> to choose a new direction</p>
        </div>
    );
};

export default NotFound;