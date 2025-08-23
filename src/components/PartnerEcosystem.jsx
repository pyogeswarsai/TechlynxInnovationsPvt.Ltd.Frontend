import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PatnerEcosystem.css";

const partners = [
  { name: "Appian", logo: "/Image12.jpg" },
  { name: "Blue Prism", logo: "/Image14.jpg" },
  { name: "AWS", logo: "/Image13.jpg" },
];

const PartnerEcosystem = () => (
  <section id="partner-ecosystem" className="partner-ecosystem-section py-5 mb-0">
    <div className="container rounded-4 w-75 h-75 bg-dark bg-opacity-50 text-center justify-content-center  p-5 ">
      <h2 className="section-heading mb-3 ">Our Partners</h2>

      <p className="section-description mb-3 fs-4">
        In partnership with global leaders like Appian, Blue Prism, AWS, and Adobe,
        we deliver unmatched expertise across automation, cloud, and digital transformation.
        Together, we craft solutions that scale, integrate, and empower clients worldwide.
      </p>

      <div className="row justify-content-center">
        {partners.map((partner, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
            <div className="card partner-card text-center p-3">
              <div className="partner-logo mb-3">
                <img src={partner.logo} alt={partner.name} className="img-fluid" />
              </div>
              <h5 className="partner-title">{partner.name}</h5>
              <p className="partner-description fs-5">
                {partner.name === "Appian" && "Low-code automation & process intelligence."}
                {partner.name === "Blue Prism" && "Robotic process automation built for enterprise."}
                {partner.name === "AWS" && "Scalable and secure cloud services."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerEcosystem;
