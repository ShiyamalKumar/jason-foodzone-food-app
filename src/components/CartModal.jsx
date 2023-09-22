import React from 'react';
import '../styles/CartModal.css';

const CartModal = ({ isOpen, closeCartModal }) => {
    return (
        <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                {/* Add your cart items and other content here */}
                <h2>Cart Items</h2>
                {/* Display cart items */}
                {/* Add a "Close" button to close the modal */}
                <button className="close-button" onClick={closeCartModal}>Close</button>
            </div>
        </div>
    );
};

export default CartModal;
