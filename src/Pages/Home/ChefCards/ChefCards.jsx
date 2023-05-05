import React from 'react';
import './ChefCards.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ChefCards = ({ card }) => {
    const { id, chefsName, chefsPicture, likes, recipes, years_experience, country } = card;

    const images = {
        backgroundImage: `url(${chefsPicture})`
    };

    return (
        <div className="col" onTouchStart={(event) => event.target.classList.toggle('hover')}>
            <div className="cols-container">
                <LazyLoad height={200} once>
                    <div className="front" style={images}>
                        <div className="inner">
                            <p>{chefsName}</p>
                            <span>{country}</span>

                        </div>
                    </div>
                </LazyLoad>
                <div className="back">
                    <div className="inner">
                        <p>Exparts in {recipes.length} recipes</p>
                        <p>{years_experience} years of Experience</p>
                        <p>{likes} people likes</p>
                        <button className='btn btn-outline'><Link to={`/recipes/${id}`}>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;
