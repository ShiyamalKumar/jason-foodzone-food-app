// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
