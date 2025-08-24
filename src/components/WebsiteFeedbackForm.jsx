import React, { useState } from "react";
import axios from "axios";
import "./WebsiteFeedbackForm.css";

const WebsiteFeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    feedbackText: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("⚠️ Please agree to the terms & conditions.");
      return;
    }

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact/feedback`, formData);
      alert("✅ Thank you for your valuable feedback!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        feedbackText: "",
        terms: false,
      });
    } catch (error) {
      console.error("❌ Error submitting feedback:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <section id="feedback-form" className="slide-in-section">
      <div className="feedback-container">
        <h2>Website Feedback</h2>
        <p>
          Let us know what you think of our website experience. We welcome your
          suggestions, comments, and opinions.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Row 1: First Name & Last Name */}
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2: Email & Mobile */}
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackText">
              How can we help you?*
            </label>
            <textarea
              id="feedbackText"
              name="feedbackText"
              rows="4"
              maxLength="1500"
              className="form-control"
              placeholder="Write your feedback..."
              value={formData.feedbackText}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="row mt-3">
            <div className="col-md-12 d-flex align-items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                style={{ marginRight: "8px" }}
              />
              <label htmlFor="terms">I agree to the terms & conditions</label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn mt-3">
            Submit
          </button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
        </form>
      </div>
    </section>
  );
};

export default WebsiteFeedbackForm;
