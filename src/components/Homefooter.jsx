import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Homefooter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Homefooter = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-content">
                            <h3>Contact Us</h3>
                            <p>
                                <span className='icons'><FontAwesomeIcon icon={faEnvelope} /></span>
                                <a className='gmail' href='https://mail.google.com/mail/u/0/#inbox?compose=GFrJzjZkxlQQZVzNztxgNtRDvtbKJsgxBRlVCMlTgZLgFdjjXFKWpQWzPrqHwRmsXBKp'><strong>Email:</strong></a>
                                 <span className="text-break">support@techlynxinnovations.com</span>

                            </p>
                            <p>
                                <span className='icons'><FontAwesomeIcon icon={faPhone} /></span>
                                <strong>Phone:</strong> +91 9876543210
                            </p>
                            <p>
                                <span className='icons'><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                <a className='map' href='https://maps.app.goo.gl/e4J42ANng3gBZKV79'><strong>Location:</strong></a>
                                 Guntur, Andhra Pradesh, 522601.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-content">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about-us">AboutUs</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/careers">Career</Link></li>
                                <li><Link to="/contact-us">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-content">
                            <h3>Legal</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                <li><Link to="/copyright-policy">Copyright Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-content">
                            <h3>Follow Us</h3>
                            <ul className="list-unstyled social-icons">
                                <li><a href="https://www.facebook.com/"><span className='icons'><FontAwesomeIcon icon={faFacebook} /></span> Facebook</a></li>
                                <li><a href="https://x.com/"><span className='icons'><FontAwesomeIcon icon={faTwitter} /></span> Twitter</a></li>
                                <li><a href="https://www.instagram.com/"><span className='icons'><FontAwesomeIcon icon={faInstagram} /></span> Instagram</a></li>
                                <li><a href="https://www.linkedin.com/"><span className='icons'><FontAwesomeIcon icon={faLinkedin} /></span> Linkedin</a></li>
                                <li><a href="https://www.youtube.com/"><span className='icons'><FontAwesomeIcon icon={faYoutube} /></span> Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-info text-white text-center py-3">
                <p>&copy; 2025 Techlynx Innovations. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Homefooter;