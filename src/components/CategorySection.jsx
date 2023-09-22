import React from 'react';

const CategorySection = ({ imageSrc, category }) => {
    return (
        <div className="category">
            <div className="category-image">
                <img src={imageSrc} alt={category} />
            </div>
            <div className="category-text">
                <p>{category}</p>
            </div>
        </div>
    );
};

export default CategorySection;
