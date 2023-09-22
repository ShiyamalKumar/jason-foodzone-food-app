import React from 'react';
import '../styles/Checkout.css';
import banner from "../assets/banner-02.1d3252d3.jpg";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="hero-sliderf">
                <div class="overlay"></div>
                <div className="hero-slider">
                    <div className="hero-content">
                        <h1>Checkout</h1>
                    </div>
                </div>

            </div>


            <div className="checkout-container">

                <div className="checkout-form">
                    <h2>Shipping Information</h2>
                    <form>

                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter your email" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Country" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Postal Code" />
                        <button>Payment</button>
                    </form>
                </div>


                <div className="total-bill">
                    <div className='total-bill-box'>
                        <h2>Total Bill</h2>

                        <div className="bill-amount">$100.00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
