  import React, { useState, useContext } from 'react';
  import './AuthModal.css';
  import { AuthContext } from '../contexts/AuthContext';

  const backendUrl = "http://localhost:9090";

  const AuthModal = ({ isOpen, onClose }) => {
    const {login} = useContext(AuthContext);
    const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'

    // Login state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Signup state
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

    // Forgot password
    const [forgotEmail, setForgotEmail] = useState('');

    // login function code
    if (!isOpen) return null;

    const loginUser = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        });
        if (!res.ok) throw new Error('Invalid Username or password');
        const data = await res.json();
        // localStorage.setItem('token', data.token); // Save JWT token
        login(data.token);
        alert('Login successful');
        onClose();
      } catch (err) {
        alert(err.message);
      }
    };

    // Signup function code
    const signupUser = async () => {
      if (signupPassword !== signupConfirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        const res = await fetch(`${backendUrl}/api/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: signupName,
            email: signupEmail,
            password: signupPassword,
            confirmPassword: signupConfirmPassword,
          }),
        });
        if (!res.ok) throw new Error('Email already existed');
        await res.json();
        alert('Registration successful, please login');
        setMode('login');
      } catch (err) {
        alert(err.message);
      }
    };

    //Request password reset
    const requestPasswordReset = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/auth/request-reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: forgotEmail }),
    });
    if (!res.ok) throw new Error('Failed to send reset link');
    alert('Check your email inbox for the reset link!');
    setMode('login');
  } catch (err) {
    alert(err.message);
  }
  };

    // main box
    const renderForm = () => {
      switch (mode) {
        case 'login':
          return (
            <>
              <h4 className="mb-4">Login to Techlynx</h4>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button className="btn btn-primary w-100 mb-3" onClick={loginUser}>Login</button>
              <div className="text-center">
                <small>
                  <a href="#" onClick={() => setMode('forgot')}>Forgot Password?</a> |{' '}
                  <a href="#" onClick={() => setMode('signup')}>Sign Up</a>
                </small>
              </div>
            </>
          );

        case 'signup':
          return (
            <>
              <h4 className="mb-4">Create Your Techlynx Account</h4>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
              />
              <button className="btn btn-success w-100 mb-3" onClick={signupUser}>Sign Up</button>
              <div className="text-center">
                <small>
                  Already have an account? <a href="#" onClick={() => setMode('login')}>Login</a>
                </small>
              </div>
            </>
          );

        case 'forgot':
          return (
            <>
              <h4 className="mb-4">Reset Your Password</h4>
              <input type="email" className="form-control mb-3" placeholder="Registered Email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)}/>
              <button className="btn btn-warning w-100 mb-3" onClick={requestPasswordReset}>Send Reset Link</button>
              <div className="text-center">
                <small>
                  Remembered password? <a href="#" onClick={() => setMode('login')}>Login</a>
                </small>
              </div>
            </>
          );

        default:
          return null;
      }
    };

    return (
      <div className="auth-modal-overlay">
        <div className={`auth-modal-container ${mode !== 'login' ? 'large' : ''}`}>
          <button className="btn-close close-btn text-dark bg-white fw-bold" onClick={onClose}>Close</button>
          {renderForm()}
        </div>
      </div>
    );
  };

  export default AuthModal;
