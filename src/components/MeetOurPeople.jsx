import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MeetOurPeople.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const paragraphVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MeetOurPeople = () => {
  const team = [
    {
      name: "Shaik Nagul Meera",
      role: "Founder & CEO",
      image: "/meera.jpg",
    },
    {
      name: "Doredla Pavani",
      role: "Managing Director",
      image: "/pavani.jpg",
    },
    {
      name: "Kolluri Prathyusha",
      role: "Manager",
      image: "/pra.jpg",
    },
  ];

  return (
    <section id="meet-our-people" className="meet-our-people text-white d-flex justify-content-center align-items-center">
      <div className="container w-75 min-vh-75 bg-dark bg-opacity-50 rounded-4 text-center justify-content-center p-5">
        <h1 className="text-center mb-4 fs-1">Meet Our People</h1>

        <motion.p
          className="intro mx-auto text-center fs-4 mb-5"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={paragraphVariants}
        >
          Our success is driven by a passionate team of innovators, thinkers, and doers.
          With diverse skills and a shared vision, they collaborate to build impactful
          solutions and shape our future. We value creativity, teamwork, and continuous
          growth—because together, we make a difference.
        </motion.p>

        <div className="card-grid d-flex justify-content-center  gap-4 flex-wrap">
          {team.map((member, index) => (
            <motion.div
              className="mb-4"
              key={index}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={paragraphVariants}
            >
              <div className="card team-member text-center h-100">
                <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top team-img mx-auto mt-3"
                    style={{ width: "80%", height: "200px", objectFit: "cover" }}
                  />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button><Link to="/careers/our-full-team" className="btn btn-light px-4 py-2 text-decoration-none">See More</Link></button>
      </div>
    </section>
  );
};

export default MeetOurPeople;