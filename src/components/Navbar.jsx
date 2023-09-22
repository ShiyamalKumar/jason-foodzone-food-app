import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/res-logo.png';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = ({ openCartModal }) => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-middle">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/foods">Foods</a></li>
                    <li><a href="/checkout">Check out</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <span className="cart-icon" onClick={openCartModal}>🛒</span>
                <span className="user-icon">👤</span>
            </div>
        </div>
    );
};

export default Navbar;
