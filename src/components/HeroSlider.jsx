import React from 'react';
import '../styles/HeroSlider.css';
import Hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { faShippingFast, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HeroSlider = () => {
    return (
        <div className="hero-slider">
            <div className="slider-content">
                <div className="slider-text">
                    <h4>Easy way to make an order</h4>
                    <h1>HUNGRY? <span class="headerspan">Just wait food at </span> your door</h1>
                    <p>Choose from a variety of mouthwatering foods for delivery or pickup.</p>
                </div>
                <div className="slider-buttons">
                    <Link to="/foods">
                        <button className="order-button">Order Now 🍲</button>
                    </Link>
                    <Link to="/foods">
                        <button className="learn-more-button">See all foods</button>
                    </Link>

                </div>
                <div className="features">
                    <div className="feature">
                        <FontAwesomeIcon icon={faShippingFast} className="feature-icon" />
                        <p>No shipping charges</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faLock} className="feature-icon" />
                        <p>100% secure checkout</p>
                    </div>
                </div>
            </div>
            <div className="slider-image">
                <img src={Hero} alt="Delicious Pizza" />
            </div>

        </div>
    );
};

export default HeroSlider;
