// import React from 'react';
// import './Auth.css';
// import logo from './assets/Logo.png';

// const SignupForm = ({ onClose }) => {
//   const [showLogin, setShowLogin] = React.useState(false);
//   if (showLogin) return <LoginForm onClose={onClose} />;

//   return (
//     <div className="auth-overlay">
//       <div className="auth-logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="auth-box">
//         <h2>Signup</h2>
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" />
//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter password" />
//         <label>Re-enter Password</label>
//         <input type="password" placeholder="Re-enter password" />
//         <button className="auth-button">Signup</button>
//         <div className="auth-footer">
//           <p>
//             Already have an account?{' '}
//             <span className="auth-link" onClick={() => setShowLogin(true)}>Login</span>
//           </p>
//         </div>
//         <span className="auth-close" onClick={onClose}>×</span>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

// import LoginForm from './Login'; // Put this at the top


import React, { useState } from 'react';
import './Auth.css';
import logo from '../assets/logo.jpg';
import LoginForm from './Login';

const SignupForm = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);
  if (showLogin) return <LoginForm onClose={onClose} />;

  return (
    <div className="auth-overlay">
      <div className="auth-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="auth-card">
        <h2>Signup</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Enter full name" />
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <label>Re-enter Password</label>
        <input type="password" placeholder="Re-enter password" />
        <button className="auth-button">Signup</button>
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <span onClick={() => setShowLogin(true)} className="auth-link">Login</span>
          </p>
        </div>
        <span className="auth-close" onClick={onClose}>×</span>
      </div>
    </div>
  );
};

export default SignupForm;
