import React from "react";
import '../components/Contact.css'
import backgroundImage from '../assets/n2.jpeg';

const MapSection = () => {
  return (
    <section
  className="map-section"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Top-centered text */}
  <div className="text-center map-header">
    <h2 className="fs-1">Visit Us</h2>
    <p className="fs-5">
      We’d love to connect with you! Whether you’re looking to discuss a
      project, explore a partnership, or just say hello — our doors are
      always open.
    </p>

    <div className="contact-details">
      <h2 className="fs-1 text-warning">Head Office</h2>
      <p className="fs-5"><strong>📍 Address:</strong>  33-6-73, Arundlepet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P - 522002.</p>
      <p className="fs-5"><strong>📞 Phone:</strong> +91 9989681812</p>
      <p className="fs-5"><strong>📞 Phone:</strong> +91 9542982674</p>
      <p className="fs-5"><strong>✉️ Email:</strong> info@techlynxinnovations.com</p>
    </div>
  </div>

  {/* Full-width Map */}
  <div className="map-frame-full">
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.714281156134!2d80.4542!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e53c58b78ff7%3A0x7d7e843dbe42cb38!2sGuntur%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1685200000000!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>

  );
};

export default MapSection;

