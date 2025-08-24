import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Contact.css'
import backgroundVideo from "../assets/v3.mp4";
import backgroundImage from '../assets/G6.jpg';

const ContactOptions = ({ onRequestService, onWebsiteFeedback, onWhatsappIcon, onManagementClick, onPartnerClick }) => {


  const options = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/2149167948/photo/word-request-on-speech-bubble.jpg?s=612x612&w=0&k=20&c=ovOOjZhT47nvYhdz43mEUAAHwzTZDI0IunYDZFc67nU=",
      icon: "📞",
      title: "Request for Service",
      desc: "Need help? Let’s build together.",
       action: "service",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/5a/85/89/5a858981e130ee1da9cc2d2e2f25f88f.jpg",
      icon: "💼",
      title: "Join Techlynx",
      desc: "Explore exciting career paths.",
       action: "join",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/688306678/photo/your-feedback-matters.jpg?s=612x612&w=0&k=20&c=aZOMZjbwsKe9HxUIJbQcnfcToNVFg38FWrudO3Ff7ks=",
      icon: "📝",
      title: "Website Feedback",
      desc: "Your suggestions help us grow.",
      action: "feedback",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1338373342/photo/booking-meeting-calendar-appointment.jpg?s=2048x2048&w=is&k=20&c=pEi67kHBFmCdzk-tYFn35KwEMA217jr7fb1bMBLnUPM=",
      icon: "🤝",
      title: "Appointment/Meeting Scheduler",
      desc: "Integrate with tools like Calendly or create a custom calendar",
       action: "partner", 
    },
    {
      id: 5,
      img: "https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-chat-bubble-app-icons-and-dark-background-photo-image_29691286.jpg",
      icon: "📄",
      title: "Whatsapp",
      desc: "Tell us what you need — we’ll price it.",
      action: "whatsapp",
    },
{
      id: 6,
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241126/pngtree-symbolizing-the-intricacies-of-project-management-abstract-blue-background-with-gears-image_16642076.jpg",
      icon: "💬",
      title: "Management Info",
      desc: "Chat with our AI for assistance.",
      action: "chat",
    },
  ];

  const handleClick = (action) => {
  if (action === "service") onRequestService();
  if (action === "feedback") onWebsiteFeedback();
  if (action === "whatsapp") {
    window.open("https://wa.me/916309390893", "_blank");
  }
  if (action === "join") {
    window.location.href = "tel:+916309390893"; // Replace with your number
  }
  if (action === "chat") onManagementClick();
  if (action === "partner") onPartnerClick();


};


  return (
    <section className="video-background-section">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="grid-container">
        {options.map((opt) => (
          <div
            key={opt.id}
            className="custom-card"
            onClick={() => handleClick(opt.action)}
          >
            <div className="card-img-container">
              <img src={opt.img} alt={opt.title} className="card-img-top" />
              <div className="card-hover-content">
                <div className="icon">{opt.icon}</div>
                <h5>{opt.title}</h5>
                <p>{opt.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ContactOptions;

