import React from 'react';
import '../components/Policy.css'
import {Link} from 'react-router-dom'

const Privacy = () => {
  return (
    <div className="privacy-gradient text-white py-5">
      <div className="container ">
        <div className="mainContain1 bg-dark p-4 p-md-5 rounded-4 shadow-sm">
          <h1 className="mb-3 border-bottom pb-2 text-uppercase">Privacy Policy</h1>
          <p className="text-light">Effective Date: August 5, 2025</p>

          <p>
            <strong>Techlynx Innovations</strong> values your privacy. This policy outlines how we collect, use, and protect your data.
          </p>

          <h4 className="mt-4">1. Information We Collect</h4>
          <p>
            We may collect personal details like your name, email, and phone number when you contact us or use our services.
          </p>

          <h4 className="mt-4">2. How We Use Information</h4>
          <p>
            To improve our services, respond to inquiries, and send updates with your consent.
          </p>

          <h4 className="mt-4">3. Data Security</h4>
          <p>
            We implement security measures to protect your data but cannot guarantee absolute security.
          </p>

          <h4 className="mt-4">4. Third-Party Sharing</h4>
          <p>
            We do not sell or share your personal data unless required by law or with your consent.
          </p>

          <h4 className="mt-4">5. Contact Us</h4>
          <p>
            For questions, email us at{' '}
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

export default Privacy;
