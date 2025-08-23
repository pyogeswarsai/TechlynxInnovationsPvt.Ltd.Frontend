import React, { useState } from "react";
import ContactOptions from "./PageTwo";
import MapSection from "./PageThree";
import ServiceForm from "./ServiceForm";
import WebsiteFeedbackForm from "./WebsiteFeedbackForm";
import ManagementInfo from "./ManagementInfo";
import AppointmentScheduler from "./AppointmentScheduler";

const ContactPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollTo = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleRequestService = () => {
    setActiveSection("service");
    scrollTo("service-form");
  };

  const handleWebsiteFeedback = () => {
    setActiveSection("feedback");
    scrollTo("feedback-form");
  };

  const handleManagementClick = () => {
    setActiveSection("management");
    scrollTo("management-info");
  };

  const handlePartnerClick = () => {
    setActiveSection("partner");
    scrollTo("appointment-scheduler");
  };

  return (
    <>
      <ContactOptions
        onRequestService={handleRequestService}
        onWebsiteFeedback={handleWebsiteFeedback}
        onManagementClick={handleManagementClick}
        onPartnerClick={handlePartnerClick}
      />

      <MapSection />
      {activeSection === "service" && <ServiceForm />}
      {activeSection === "feedback" && <WebsiteFeedbackForm />}
      {activeSection === "management" && <ManagementInfo />}
      {activeSection === "partner" && <AppointmentScheduler />}
    </>
  );
};

export default ContactPage;
