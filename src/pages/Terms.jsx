import React from 'react';
import '../components/Policy.css'
import {Link} from 'react-router-dom'

const Terms = () => {
  return (
    <div className="container-fluid py-5 text-white terms-wrapper">
      <div className=" mainContain1 bg-dark shadow p-4 rounded">
        <h1 className="mb-3 border-bottom  pb-2">Terms & Conditions</h1>
        <p className="text-white mb-4">Last updated: August 5, 2025</p>

        <p>
          Welcome to <strong>Techlynx Innovations</strong>! By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part, please do not use our services.
        </p>

        <h4 className="mt-4 text-warning">1. Use of Website</h4>
        <p>You agree to use our website only for lawful purposes. You must not misuse or disrupt our site or servers.</p>

        <h4 className="mt-4 text-warning">2. Intellectual Property</h4>
        <p>All content, trademarks, and IP displayed on this site are owned by Techlynx Innovations. Unauthorized use is prohibited.</p>

        <h4 className="mt-4 text-warning">3. Limitation of Liability</h4>
        <p>We are not liable for any damages resulting from your use of this website or services, to the extent permitted by law.</p>

        <h4 className="mt-4 text-warning">4. Changes to Terms</h4>
        <p>We may update these Terms from time to time. Your continued use of the site means you accept the updated terms.</p>

        <p className="mt-4">
          If you have questions, contact us at{' '}
          <a href="mailto:support@techlynxinnovations.com" className="link-warning">
            support@techlynxinnovations.com
          </a>.
        </p>
        <Link to="/home" ><button className='btn btn-primary me-2'>Back to Home</button> </Link>
      </div>
    </div>
  );
};

export default Terms;
