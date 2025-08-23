import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CoreValues.css";

const coreValuesList = [
  {
    title: "Integrity",
    description: "We promise to always act with integrity,even when faced with challenges or difficult decisions.",
    bgImage:"https://th.bing.com/th/id/OIP.dR2t29hTVcBaxifPGujvUgHaEl?w=302&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  
  {
    title: "Value Creation",
    description:"The technology should be a catalyst for for growth, innovation ,and success.",
    bgImage:"https://th.bing.com/th/id/OIP.kKrB9BgALkW3CQ-3I--2RgHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  { 
    title: "Social Responsibility", 
    description: "We are dedicated to using our skills and resources to make a positive impact on the world.",
    bgImage:"https://th.bing.com/th?q=Social+Responsibility+in+Landscape+Architecture&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
  }

];

const CoreValues = () => {
  return (
    <section id="core-values" className="core-values-section py-5 text-white d-flex justify-content-center align-items-center">
      <div className="core-values-container rounded-4 bg-dark bg-opacity-50 w-75 min-vh-75 p-5">
        <h2 className="text-center text-white mb-5 pb-2 fs-1 animate-fade-up">Our Core Values</h2>
        <div className="row g-4 justify-content-center">
          {coreValuesList.map((value, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch"
            >
              <div
                className="card core-card w-100 h-100 text-white  animate-fade-up"
                style={{'--bg-image':`url(${value.bgImage})`,
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        animationDelay: `${index * 0.3}s `}}
              >
                <div className="card-img-overlay fs-5 d-flex flex-column justify-content-end p-3 core-card-overlay">
                  <h5 className="card-title fw-bold">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;