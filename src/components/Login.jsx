// import React from 'react';
// import './Auth.css';
// import logo from './assets/Logo.png';
// import SignupForm from './Signup';

// const LoginForm = ({ onClose }) => {
//   const [showSignup, setShowSignup] = React.useState(false);

//   if (showSignup) return <SignupForm onClose={onClose} />;

//   return (
//     <div className="auth-overlay">
//       <div className="auth-logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="auth-box">
//         <h2>Login</h2>
//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />
//         <button className="auth-button">Login</button>
//         <div className="auth-footer">
//           <a href="#">Forgot Password?</a>
//           <p>
//             Don't have an account?{' '}
//             <span className="auth-link" onClick={() => setShowSignup(true)}>Signup</span>
//           </p>
//         </div>
//         <span className="auth-close" onClick={onClose}>×</span>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import './Auth.css';
import logo from '../assets/logo.jpg'
import SignupForm from './Signup';

const LoginForm = ({ onClose }) => {
  const [showSignup, setShowSignup] = useState(false);
  if (showSignup) return <SignupForm onClose={onClose} />;

  return (
    <div className="auth-overlay">
      <div className="auth-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="auth-card">
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="auth-button">Login</button>
        <div className="auth-footer">
          <a href="#">Forgot Password?</a>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setShowSignup(true)} className="auth-link">Signup</span>
          </p>
        </div>
        <span className="auth-close" onClick={onClose}>×</span>
      </div>
    </div>
  );
};

export default LoginForm;
