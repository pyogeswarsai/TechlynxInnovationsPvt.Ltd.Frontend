// AppointmentScheduler.jsx
import React, { useState } from "react";
import axios from "axios";
import "../components/Contact.css";

const AppointmentScheduler = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    appointmentDate: "",
    timeSlot: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9090/api/contact/appointment", formData);

      setConfirmation(
        `✅ Your virtual meet has been scheduled for ${formData.appointmentDate} at ${formData.timeSlot}. Thank you, ${formData.fullName}!`
      );

      setFormData({
        fullName: "",
        email: "",
        appointmentDate: "",
        timeSlot: "",
      });
    } catch (error) {
      console.error("❌ Error scheduling appointment:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <section id="appointment-scheduler" className="slide-in-section">
      <div className="container text-center text-light">
        <h2>Book an Appointment</h2>
        <p>Choose a time to collaborate or discuss partnership opportunities.</p>

        {!confirmation ? (
          <form
            className="mt-4 bg-secondary p-4 rounded"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div className="mb-3 text-start">
              <label className="text-white form-label">Full Name:</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3 text-start">
              <label className="text-white form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Appointment Date */}
            <div className="mb-3 text-start">
              <label className="text-white form-label">Select Date:</label>
              <input
                type="date"
                className="form-control"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time Slot */}
            <div className="mb-3 text-start">
              <label className="text-white form-label">Select Time Slot:</label>
              <select
                className="form-control"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">-- Select --</option>
                <option value="09-10 AM">09 AM - 10 AM</option>
                <option value="11-12 PM">11 AM - 12 PM</option>
                <option value="03-04 PM">03 PM - 04 PM</option>
                <option value="04-05 PM">04 PM - 05 PM</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Schedule Meeting
            </button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
          </form>
        ) : (
          <div className="mt-4 p-4 bg-info text-white rounded">
            <h4>{confirmation}</h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentScheduler;
