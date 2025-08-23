import React from 'react';
import './faq.css';

const FaqPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="faq-popup-box">
        <button className="popup-close-icon" onClick={onClose}>&times;</button>
        <h3>Frequently Asked Questions</h3>

        <div className="faq-item">
          <h5>1. How can I apply for a job?</h5>
          <p>Click on the "Apply Now" button under a job opening and fill out the application form.</p>
        </div>

        <div className="faq-item">
          <h5>2. Can I apply for multiple roles?</h5>
          <p>Yes, you're welcome to apply to any role that matches your skills and interests.</p>
        </div>

        <div className="faq-item">
          <h5>3. Do you offer remote roles?</h5>
          <p>Yes, we offer hybrid and remote roles depending on the position and location.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqPopup;
