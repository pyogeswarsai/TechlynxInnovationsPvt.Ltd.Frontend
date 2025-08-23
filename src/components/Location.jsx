import React from 'react';
import './Location.css'; // Keep it only if you want to add custom tweaks

function Location() {
  return (
    <section className="location-section d-flex justify-content-center align-items-center min-vh-100" id="location">
      <div className="location-container bg-dark bg-opacity-50 p-4 rounded-4 shadow text-center w-75" style={{ maxWidth: '1150px', height: '500px' }}>
        <h2 className="text-white mb-3 fs-1">Head Office</h2>
        <p className="text-white fs-4 mb-1">Guntur: Techlynx Innovations Pvt. Ltd.</p>
        <p className="text-white fs-4 mb-1"> 10/3, near Tagore chowk, Sali Pet, Arundelpet, Guntur, Andhra Pradesh, 522601.</p>
       
        <div className="map-container mt-3 rounded overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.3254875271296!2d80.442218!3d16.306305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzIyLjciTiA4MMKwMjYnMzIuMCJF!5e0!3m2!1sen!2sin!4v1755066052359!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '250px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
