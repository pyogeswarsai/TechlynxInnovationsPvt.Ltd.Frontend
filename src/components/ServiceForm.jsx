import React, { useState } from "react";
import "./ServiceForm.css";
import axios from "axios";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    country: "",
    industry: "",
    service: "",
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
      // Map frontend fields to backend fields
      const payload = {
        firstName: formData.fname,
        lastName: formData.lname,
        email: formData.email,
        mobileNumber: formData.mobile,
        country: formData.country,
        industry: formData.industry,
        service: formData.service,
      };
      
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact/request`, payload);

      alert("✅ Your request has been submitted successfully!");

      // Reset form
      setFormData({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        country: "",
        industry: "",
        service: "",
        terms: false,
      });
    } catch (error) {
      console.error("❌ Error submitting service request:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="service-form" className="slide-in-section">
      <div className="service-form-container">
        <div className="service-form-card">
          <h3>Request for Service</h3>
          <form onSubmit={handleSubmit}>
            {/* Row 1: First Name & Last Name */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter Last Name"
                  value={formData.lname}
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
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 3: Country & Industry */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="industry">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Industry
                  </option>
                  <option>IT</option>
                  <option>HR</option>
                  <option>Communication</option>
                  <option>Finance</option>
                  <option>Education</option>
                </select>
              </div>
              <div className="col-md-6">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option>Web Development</option>
                <option>Mobile app Development</option>
                <option>AL/ML</option>
                <option>DevOps</option>
                <option>Python full stack</option>
                <option>Java full stack</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Business Analyst</option>
                <option>Python Programming</option>
                <option>Java Programming</option>
                <option>MySQL</option>
                <option>NoSQL</option>
              </select>
            </div>
            </div>

            {/* Checkbox */}
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

            {/* Submit Button */}
            <button type="submit" className="submit-btn mt-3">
              Submit
            </button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
