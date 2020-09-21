import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="main-container">
                <div className="left box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>We are dedicated to making medicines easily available to every people. We care for all and try our best to connect all with the help our community.</p>
                        <div className="social">
                            <a href="https://www.facebook.com/prabinX7">
                                <span>
                                    <FacebookIcon className="facebook" />
                                </span>
                            </a>
                            <a href="https://www.instagram.com/praabiinrai/">
                                <span>
                                    <InstagramIcon className="instagram" />
                                </span>
                            </a>
                            <a href="https://twitter.com/RaiPraabiin">
                                <span>
                                    <TwitterIcon className="twitter" />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/nawaraj-rai-a410b411b/">
                                <span>
                                    <LinkedInIcon className="linkedin" />
                                </span>
                            </a>
                            <a href="http://github.com/prabin-7">
                                <span>
                                    <GitHubIcon className="github" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>	

                <div className="center box">
                    <h2>Contact Us</h2>
                    <div class="content">
                        <div className="place">
                            <span className="fas location">
                                <LocationOnIcon />
                            </span>
                            <span className="text">Dhulikhel, Nepal</span>
                        </div>
                        <div className="phone">
                            <span className="fas phone" > 
                                <PhoneIcon />
                            </span>
                            <span className="text">+977 9817335059</span>
                        </div>
                        <div className="email">
                            <span  className="fas email">
                                <EmailIcon />
                            </span>
                            <span className="text">epharma@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="right box">
                    <h2>Useful Links</h2>
                    <div className="content">
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
            </div>
            <div className="bottom">
                <center>
                    <span className="credit">
                        Designed By ❤️ 
                        <Link to="#"> TeneT </Link>
                        ❤️ | 
                    </span>
                    <span> Copyright © 2020 All rights reserved. </span>
                </center>
            </div>
        </div>
        
    );
}

export default Footer;
