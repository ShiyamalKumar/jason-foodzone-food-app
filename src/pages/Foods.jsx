import React, { useState } from 'react';
import '../styles/Foods.css';
import products from '../assets/products';


const Foods = () => {
    const categories = [...new Set(products.map((product) => product.category))];
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
    const filteredCategories = categories.filter(category => category.toLowerCase().includes(search.toLowerCase()));


    return (
        <div className="foods">
            <div className="hero-sliderf">
                <div class="overlay"></div>
                <div className="hero-slider">
                    <div className="hero-content">
                        <h1>All Foods</h1>
                    </div>
                </div>

            </div>
            <div className="filter-container">
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="I'm looking for..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="category-dropdown">
                    <select onChange={(e) => handleFilterChange(e.target.value)} value={filter}>
                        <option value="all">All</option>
                        {filteredCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="food-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="food-card">
                        <img src={product.image01} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Foods;
