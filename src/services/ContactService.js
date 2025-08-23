import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:9090/api";

// Request Service
export const submitRequest = (data) =>
  axios.post(`${API_BASE}/contact/request`, data);

// Feedback
export const submitFeedback = (data) =>
  axios.post(`${API_BASE}/contact/feedback`, data);

// Appointment
export const submitAppointment = (data) =>
  axios.post(`${API_BASE}/contact/appointment`, data);
