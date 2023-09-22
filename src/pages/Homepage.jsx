import React from 'react';
import '../styles/Homepage.css';
import HeroSlider from '../components/HeroSlider';
import PopularFoods from '../components/PopularFoods';
import cat1 from "../assets/category-01.png";
import cat2 from "../assets/category-02.png";
import cat3 from "../assets/category-03.png";
import cat4 from "../assets/category-04.png";
import CategorySection from '../components/CategorySection';


const Homepage = () => {
    return (
        <div className="homepage">

            <HeroSlider />
            <div className='categoryrow'>
                <CategorySection imageSrc={cat1} category="Asian" />
                <CategorySection imageSrc={cat2} category="Chinese" />
                <CategorySection imageSrc={cat3} category="Pizza" />
                <CategorySection imageSrc={cat4} category="Italian" />
            </div>
            <PopularFoods />

        </div>
    );
};

export default Homepage;
