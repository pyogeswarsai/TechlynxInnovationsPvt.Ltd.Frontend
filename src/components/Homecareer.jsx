// Career.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homecareer.css";
import { Link } from "react-router-dom";

const Homecareer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <section
      className="careers-section d-flex flex-column flex-lg-row align-items-center justify-content-center"
      id="careers"
    >
      {/* Left Side: Background Image */}
      <div
        className="career-image w-100 w-lg-50"
        data-aos="fade-right"
        style={{
          backgroundImage: `url('Images/career.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.65)",
        }}
      ></div>

      {/* Right Side: Gradient Wrapper */}
      <div className="career-content-wrapper w-100 w-lg-50 position-relative">
        {/* Optional animated blurred blob */}
        <div className="blob-bg"></div>

        <div
          className="career-content text-light px-4 px-lg-5"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="fw-bold mb-3 text-warning" data-aos="zoom-in" data-aos-delay="300">
            Your Future Starts Here
          </h2>
          <p className="lead fs-5" data-aos="fade-up" data-aos-delay="400">
            At <strong>Techlynx Innovations</strong>, you’re not just an employee — 
            you’re an innovator, a creator, a changemaker.
          </p>

          <ul className="list-unstyled mt-4">
            <li className="mb-3 fs-5" data-aos="fade-up" data-aos-delay="500">
              <strong>🚀 Fast-track Growth:</strong> Learn, build, and lead real-world solutions.
            </li>
            <li className="mb-3 fs-5" data-aos="fade-up" data-aos-delay="600">
              <strong>🌐 Hybrid Work Culture:</strong> Flexibility that fits your lifestyle.
            </li>
            <li className="mb-3 fs-5" data-aos="fade-up" data-aos-delay="700">
              <strong>🧠 Upskill Culture:</strong> Access top resources and mentors across the globe.
            </li>
            <li className="mb-3 fs-5" data-aos="fade-up" data-aos-delay="800">
              <strong>🤝 Diversity First:</strong> Different perspectives. One powerful team.
            </li>
          </ul>

          <Link
            to="/careers/jobcards"
            className="btn chang mt-3"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            See Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homecareer;
