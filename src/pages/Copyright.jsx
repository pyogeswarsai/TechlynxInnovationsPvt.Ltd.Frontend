import React from 'react';
import '../components/Policy.css'
import {Link} from 'react-router-dom'

const Copyright = () => {
  return (
    <div className="copyright-gradient text-white py-5">
      <div className="container">
        <div className="mainContain1 bg-dark p-4 p-md-5 rounded-3 shadow-lg">
          <h1 className="mb-3 text-uppercase border-bottom border-warning pb-2">Copyright Policy</h1>
          <p className="text-light">Effective Date: August 5, 2025</p>

          <p>
            All content, code, images, and materials on this site are © 2025 <strong>Techlynx Innovations</strong> unless otherwise stated.
          </p>

          <h4 className="mt-4 text-warning">1. Ownership</h4>
          <p>
            We own or license all intellectual property on this site. You may not reproduce, distribute, or exploit any content without permission.
          </p>

          <h4 className="mt-4 text-warning">2. Reporting Infringement</h4>
          <p>
            If you believe any content violates your copyright, please email us at{' '}
            <a href="mailto:support@techlynxinnovations.com" className="link-warning text-decoration-underline">
              support@techlynxinnovations.com
            </a>{' '}
            with details.
          </p>

          <h4 className="mt-4 text-warning">3. Enforcement</h4>
          <p>Unauthorized use may result in legal action.</p>
        <Link to="/home" ><button className='btn btn-primary me-2'>Back to Home</button> </Link>          
        </div>
      </div>
    </div>
  );
};

export default Copyright;
