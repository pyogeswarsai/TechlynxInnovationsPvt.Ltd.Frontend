import React from 'react';
import '../components/Policy.css'
import {Link} from 'react-router-dom'

const Cookie = () => {
  return (
    <div className="cookie-gradient text-white py-5">
      <div className="container ">
        <div className="mainContain1 bg-dark p-4 p-md-5 rounded-3 shadow-lg">
          <h1 className="mb-3 text-uppercase border-bottom border-info pb-2">Cookie Policy</h1>
          <p className="text-light">Effective Date: August 5, 2025</p>

          <p>
            This Cookie Policy explains how <strong>Techlynx Innovations</strong> uses cookies and similar technologies on our website.
          </p>

          <h4 className="mt-4 text-warning">1. What Are Cookies?</h4>
          <p>
            Cookies are small text files stored on your device to help us recognize you and improve your experience.
          </p>

          <h4 className="mt-4 text-warning">2. How We Use Cookies</h4>
          <ul className="custom-list">
            <li>To understand how you use our site</li>
            <li>To remember your preferences</li>
            <li>To provide relevant content</li>
          </ul>

          <h4 className="mt-4 text-warning">3. Managing Cookies</h4>
          <p>
            You can disable cookies in your browser settings, but some features may not work properly.
          </p>

          <p className="mt-4">
            Questions? Contact us at{' '}
            <a href="mailto:support@techlynxinnovations.com" className="link-warning text-decoration-underline">
              support@techlynxinnovations.com
            </a>.
          </p>
        <Link to="/home" ><button className='btn btn-primary me-2'>Back to Home</button> </Link>          
        </div>
      </div>
    </div>
  );
};

export default Cookie;
