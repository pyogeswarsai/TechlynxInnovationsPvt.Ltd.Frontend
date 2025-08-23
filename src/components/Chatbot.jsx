// Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const messagesEndRef = useRef(null);

  const initialMessages = [
    { from: "bot", text: "👋 Hi, welcome to Techlynx Innovations Pvt. Ltd!" },
    { from: "bot", text: "Please choose an option below:" },
  ];

  const mainOptions = [
    "Know About Company",
    "Services in Our Company",
    "Careers Section",
    "Get in touch",
    "Exit",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [options, setOptions] = useState(mainOptions);

  const resetChat = () => {
    setMessages(initialMessages);
    setOptions(mainOptions);
  };

  const handleToggle = () => {
    if (isOpen) {
      resetChat(); // reset whenever closing
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    let newMessages = [...messages, { from: "user", text: option }];

    // About Company
    if (option === "Know About Company") {
      newMessages.push({
        from: "bot",
        text:
          "Techlynx Innovations Pvt. Ltd. is a forward-thinking IT company based in Guntur, Andhra Pradesh. We specialize in delivering Full Stack Development, Cloud Transformation, AI Solutions, Data Intelligence, and more.",
      });
      newMessages.push({
        from: "bot",
        text: "Would you like to know more?",
      });
      setOptions(["Yes, tell me more", "Back to Main Menu"]);
    }

    // About Company -> Know More
    else if (option === "Yes, tell me more") {
      newMessages.push({
        from: "bot",
        text:
          "We are dedicated to helping businesses thrive through innovative technologies. With expertise in AI, cloud computing, DevOps, mobile apps, and cybersecurity, we deliver scalable and secure solutions tailored to client needs.",
      });
      newMessages.push({
        from: "bot",
        text: "✅ Thank you for exploring about Techlynx Innovations Pvt. Ltd!",
      });
      setOptions(["Back to Main Menu"]);
    }

    // Services
    else if (option === "Services in Our Company") {
      newMessages.push({
        from: "bot",
        text: "Here are the services we offer:",
      });
      setOptions([
        "Full Stack Development",
        "Cloud Transformation",
        "AI Solutions",
        "Data Intelligence",
        "UI/UX Design",
        "Mobile App Development",
        "DevOps Engineering",
        "Cybersecurity",
        "Blockchain Integration",
        "Back to Main Menu",
      ]);
    }

    // Service descriptions
    else if (
      [
        "Full Stack Development",
        "Cloud Transformation",
        "AI Solutions",
        "Data Intelligence",
        "UI/UX Design",
        "Mobile App Development",
        "DevOps Engineering",
        "Cybersecurity",
        "Blockchain Integration",
      ].includes(option)
    ) {
      const descriptions = {
        "Full Stack Development":
          "🌐 We build scalable web applications with both frontend and backend expertise.",
        "Cloud Transformation":
          "☁️ We help businesses migrate, optimize, and scale with secure cloud solutions.",
        "AI Solutions":
          "🤖 We design AI-powered systems to automate tasks and deliver smart insights.",
        "Data Intelligence":
          "📊 We turn raw data into actionable insights with analytics and BI tools.",
        "UI/UX Design":
          "🎨 We create intuitive, user-friendly, and engaging digital experiences.",
        "Mobile App Development":
          "📱 We build seamless Android and iOS apps tailored to business goals.",
        "DevOps Engineering":
          "⚙️ We streamline software delivery pipelines with modern DevOps practices.",
        "Cybersecurity":
          "🛡️ We protect businesses with robust security solutions and threat monitoring.",
        "Blockchain Integration":
          "🔗 We implement blockchain solutions for secure and transparent systems.",
      };
      newMessages.push({ from: "bot", text: descriptions[option] });
      setOptions(["Explore More Services", "Back to Main Menu"]);
    } else if (option === "Explore More Services") {
      setOptions([
        "Full Stack Development",
        "Cloud Transformation",
        "AI Solutions",
        "Data Intelligence",
        "UI/UX Design",
        "Mobile App Development",
        "DevOps Engineering",
        "Cybersecurity",
        "Blockchain Integration",
        "Back to Main Menu",
      ]);
    }

    // Careers
    else if (option === "Careers Section") {
      newMessages.push({
        from: "bot",
        text: "Choose your career path:",
      });
      setOptions(["For Students", "For Freshers", "For Experienced", "Back to Main Menu"]);
    } else if (option === "For Students") {
        newMessages.push({
            from: "bot",
            text: "👨‍🎓👩‍🎓 Our internships provide students with real project experience, mentorship, and the opportunity to convert into full-time roles. If you are interested go through careers page and apply for internship."
        });
        setOptions(["Back to Careers", "Back to Main Menu"]);
    } else if (option === "For Freshers") {
      newMessages.push({
        from: "bot",
        text:
          "🌱 Freshers at Techlynx are given opportunities to learn, grow, and work on real-time projects under expert guidance. If you are interested go through careers page and apply as a Fresher.",
      });
      setOptions(["Back to Careers", "Back to Main Menu"]);
    } else if (option === "For Experienced") {
      newMessages.push({
        from: "bot",
        text:
          "💼 Experienced professionals bring expertise and innovation to our projects. We provide leadership roles and challenging opportunities. If you are interested go through careers page and apply for job.",
      });
      setOptions(["Back to Careers", "Back to Main Menu"]);
    } else if (option === "Back to Careers") {
      setOptions(["For Students", "For Freshers", "For Experienced", "Back to Main Menu"]);
    }

    // Contact Us
    else if (option === "Get in touch") {
      newMessages.push({
        from: "bot",
        text:
          "📩 You can reach us at hr@techlynxinnovations.com or visit our office at Guntur, Andhra Pradesh.",
      });
      newMessages.push({
        from: "bot",
        text:
          "📩 Book an appointment by filling book an appointment form in contact section and know more details",
      });      
      setOptions(["Back to Main Menu"]);
    }

    // Back
    else if (option === "Back to Main Menu") {
      setOptions(mainOptions);
    }

    // Exit
    else if (option === "Exit") {
      newMessages.push({
        from: "bot",
        text: "🙏 Thank you for visiting Techlynx Innovations. Have a great day!",
      });
      newMessages.push({
        from: "bot",
        text: "✍️ Don't forget to submit the feedback form you can access it from contact section",
      });      
      setOptions([]);
    }

    setMessages(newMessages);
  };

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>💬 Techlynx Chatbot</span>
            <button className="close-btn" onClick={handleToggle}>
              ✖
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-options">
            {options.map((opt, idx) => (
              <button
                key={idx}
                className="option-btn"
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={handleToggle}>
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
