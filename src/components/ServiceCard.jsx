// ServiceSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'; 

const services = [
  {
    title: "Full Stack Development",
    description: "We build scalable front-end and back-end applications tailored for performance and growth.",
    path: "full-stack-development"
  },
  {
    title: "Cloud Transformation",
    description: "Modernize your infrastructure with cloud-native solutions and secure deployments.",
    path: "cloud-transformation"
  },
  {
    title: "AI Solutions",
    description: "Leverage AI and machine learning to automate, predict, and optimize business workflows.",
    path: "ai-solutions"
  },
  {
    title: "Data Intelligence",
    description: "Extract, analyze, and visualize data to drive smarter business decisions.",
    path: "data-intelligence"
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive user experiences with beautiful and accessible interfaces.",
    path: "uiux-design"
  },
  {
    title: "Mobile App Development",
    description: "Native and hybrid apps that are fast, responsive, and built for every platform.",
    path: "mobile-app-development"
  },
  {
    title: "DevOps Engineering",
    description: "Automate pipelines, CI/CD, monitoring, and delivery to ship faster and smarter.",
    path: "devops-engineering"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with best-in-class security protocols and threat detection.",
    path: "cybersecurity"
  },
  {
    title: "Blockchain Integration",
    description: "Decentralized solutions for secure transactions, smart contracts, and data immutability.",
    path: "block-chain-integration"
  },
];

const serviceVideos = [
  "/videos/full_stack_development.mp4",
  "/videos/cloud_transformation.mp4",
  "/videos/ai_solutions.mp4",
  "/videos/data_intelligence.mp4",
  "/videos/uiux_design.mp4",
  "/videos/mobile_app_development.mp4",
  "/videos/devops_engineering.mp4",
  "/videos/cybersecurity.mp4",
  "/videos/blockchain_inegration.mp4",
];

const ServiceCard = () => {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-white">Our Services</h1>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service-card h-100 text-center p-4 shadow-sm animate__animated animate__fadeInUp">
                <div className="service-video mb-3">
                  <video className="w-100 rounded" autoPlay loop muted playsInline>
                    <source src={serviceVideos[index]} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <Link to={`/services/${service.path}`} className="btn chnge">Get Started...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
