import React from 'react';
import './WhatsAppIcon.css'; // Import CSS styling

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/919182452794" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppIcon;