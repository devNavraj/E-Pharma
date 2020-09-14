import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" >E-Pharma</Link>
            </div>
            <div className="header-links">
                <Link to="/cart" > Cart  
                  <ShoppingCartIcon className="cartIcon" />
                </Link>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                  <Link to="/signin">Sign In</Link>
                }
                { userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <a href="#">Admin</a>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/orders">Orders</Link>
                        <Link to="/products">Products</Link>
                      </li>
                    </ul>
                  </div>
                )}
            </div>
        </header>
        <aside className="sidebar">
            <h3>Medicine Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul className="categories">
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
        </aside>

        <main className="main">
            <div className="content">
              <Route path="/orders" component={OrdersScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/products" component={ProductsScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/category/:id" component={HomeScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
                
            </div>
        </main>
        
        <footer className="footer">
          <div className="conrainer-wrap">
            <div className="row">
              <div className="column">
                <div className="footer-widget about-widget">
                  <h2 className="widget-title">
                    About Us
                  </h2>
                  <p>
                    We are dedicated to making medicines easily available to every people. We care for all and try our best to connect all with our community.
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
                    Useful Pages
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
                    Address: Dhulikhel, Kavrepalanchowk, Nepal
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
          </div>

        <div className="copyright">
          <div className="container">
            <p>Copyright © 2020 All rights reserved. | Designed by 
              <FacebookIcon />
                <a href="#">Team TeneT</a>
            </p>
          </div>
          
        </div>
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
