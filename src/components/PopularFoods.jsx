import React, { useState } from 'react';
import '../styles/PopularFoods.css';
import products from '../assets/products';
import { useCart } from '../CartContext';

const PopularFoods = ({ product }) => {
    const { addToCart } = useCart();
    const categories = [...new Set(products.map((product) => product.category))];
    const [filter, setFilter] = useState('all');


    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

    return (
        <div className="popular-foods">
            <h2>Popular Foods</h2>
            <div className="filter">
                <button onClick={() => handleFilterChange('all')}>All</button>
                {categories.map((category) => (
                    <button key={category} onClick={() => handleFilterChange(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="food-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="food-card">
                        <img src={product.image01} alt={product.title} />
                        <h3>{product.title}</h3>
                        <div className='bot-grid'>
                            <h1>${product.price.toFixed(2)}</h1>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularFoods;
