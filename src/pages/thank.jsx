import './thank.css';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1>🎉 Thank You for Applying!</h1>
        <p>We appreciate your interest in our Company.</p>
        <p>Our team will review your application and get back to you soon.</p>
        <p>Meanwhile, stay connected and keep exploring opportunities!</p>
        <Link to="/careers" className="back-home-btn">
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
