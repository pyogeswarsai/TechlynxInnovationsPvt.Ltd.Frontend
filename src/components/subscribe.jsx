import { useState } from 'react';
import './subscribe.css';

const SubscribePopup = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {!submitted ? (
          <>
            <h3>Subscribe</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
              <input type="tel" placeholder="Enter your phone number" required />
              <div className="button-group">
                <button type="submit" className="btn-submit">Submit</button>
                <button type="button" className="btn-submit" onClick={onClose}>Close</button>
              </div>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h4>🎉 Thank you for subscribing!</h4>
            <p>We'll keep you updated with the latest news and opportunities.</p>
            <button className="btn-submit" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribePopup;
