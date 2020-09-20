import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockIcon from '@material-ui/icons/Lock';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer() {
    return (
        <div className="footer">
            <div className="conrainer-wrap">
                <div className="row">

                    <div className="column">
                        <div className="footer-widget about-widget">
                            <h2 className="widget-title">
                                About
                            </h2>
                            <p>
                                We are dedicated to making medicines easily available to every people. We care for all and try our best to connect all with the help our community.
                            </p>
                            <div className="cards">
                                <CreditCardIcon className="creditcard"/>
                            </div>
                            <p>
                                <span>
                                    <LockIcon className="lock-icon" />
                                </span>
                                Secure Online Payment
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="footer-widget categories-widget">
                        <h2 className="widget-title">
                            Categories
                        </h2>
                        <ul>
                            <li>
                                <Link to="category/Anti-inflammatory">Anti-inflammatory</Link>
                            </li>
                            <li>
                                <Link to="category/Anti-fungal">Anti-fungal</Link>
                            </li>
                            <li>
                                <Link to="category/Anti-biotic">Anti-biotic</Link>
                            </li>
                            <li>
                                <Link to="category/Rosuvastatin">Rosuvastatin</Link>
                            </li>
                            <li>
                                <Link to="category/Esomeprazole">Esomeprazole</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="footer-widget useful-pages">
                        <h2 className="widget-title">
                            Useful Links
                        </h2>
                        <ul>
                            <li>
                                <Link to="/cart">Shopping Cart</Link>
                            </li>
                            <li>
                                <Link to="/profile">Your Profile</Link>
                            </li>
                            <li>
                                <Link to="/orders">Your Orders</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/terms-condition">Terms & Condition</Link>
                            </li>
                            <li>
                                <Link to="/policy">Private Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="footer-widget contact-widget">
                        <h2 className="widget-title">
                            Contact
                        </h2>

                        <div className="contact-address">
                            <LocationOnIcon className="location-icon" />
                            Address : Dhulikhel, Kavrepalanchowk, Nepal
                        </div>

                        <div className="contact-number">
                            <PhoneIcon className="phone-icon" />
                            Mobile: +977 9817335059
                        </div>

                        <div className="contact-email">
                            <EmailIcon className="email-icon" />
                            Email: tenet@epharma.com
                        </div>

                        <div className="social-widget">
                            <a href="#">
                                <FacebookIcon className="facebook" />
                            </a>
                            <a href="#">
                                <InstagramIcon className="instagram" />
                            </a>
                            <a href="#">
                                <TwitterIcon className="twitter" />
                            </a>
                            <a href="#">
                                <LinkedInIcon className="linkedin" />
                            </a>
                            <a href="#">
                                <GitHubIcon className="github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>	

            <div className="copyright">
                <div className="container">
                    <p>Copyright © 2020 All rights reserved. | Designed by {' '}
                        <FavoriteIcon /> {' '}
                        <a href="#">Team TeneT</a>
                        {' '}<FavoriteIcon /> 
                    </p>
                </div>
            
            </div>
        </div>
    );
}

export default Footer;
