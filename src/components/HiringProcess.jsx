import React, { useState } from 'react';
import './HiringProcess.css';

const HiringProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleStepClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const hiringSteps = [
    {
      title: "Application & Resume Shortlisting",
      description: "Submit your application and then the resume. Ensure your resume highlights relevant projects and experiences."
    },
    {
      title: " Online Assessment",
      description: "candidates were required to complete an online assignment as part of the evaluation stage. The assignment was sent via email or a hiring portal, with clear instructions and a strict deadline."
    },
    {
      title: "Technical Interview",
      description: "Showcase your technical expertise and problem-solving abilities in an interview with our technical panel. Be prepared for coding challenges and system design questions."
    },
    {
      title: "HR Interview",
      description: "A discussion focused on your career goals, communication skills, and alignment with our company values. This is a great opportunity to ask about our culture and growth opportunities."
    },
    {
      title: "Decision & Offer",
      description: "Successful candidates receive an offer to join our team and start their journey with us. The offer will include details on compensation, benefits, and your start date."
    }
  ];

return (
  <div className="hiring-background"> {/* ✅ ADD THIS DIV */}
    <div className="hiring-container"> {/* ✅ YOUR EXISTING BOX */}
      <div className="header">
        <h1>Our Hiring Process</h1>
      </div>
      <div className="timeline">
        {hiringSteps.map((step, index) => (
          <div key={index} className={`timeline-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content" onClick={() => handleStepClick(index)}>
              <h3>{step.title}</h3>
              {activeIndex === index && (
                <p className="timeline-description">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default HiringProcess;