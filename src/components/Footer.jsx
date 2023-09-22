import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/res-logo.png';
import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">

                <div className="footer-left">
                    <img src={Logo} alt="Footer Logo" className="footer-logo" />
                    <h4>Jason foodzone</h4>
                    <p>Your favorite food delivered fast!</p>
                    <p className='copyrighttext'>&copy; 2023 Jason foodzone. All rights reserved.</p>
                </div>
            </div>
            <div className="footer-section">

                <div className="footer-delivery">
                    <h4>Delivery Times</h4>
                    <p>Monday - Friday 10:00 AM - 11:00 PM</p>
                    <p>Friday - Sunday Off day</p>
                </div>
            </div>
            <div className="footer-section">

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Location: ZindaBazar, Sylhet-3100,Bangladesh</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@foodapp.com</p>
                </div>
            </div>
            <div className="footer-section">

                <div className="footer-newsletter">
                    <h4>Subscribe to Newsletter</h4>
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                    <div className="social-icons">
                        <a href="#"><i className=" fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
