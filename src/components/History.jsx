import React from "react";
import { motion } from "framer-motion";
import "./History.css"; 

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const History = () => {
  return (
    <section id="History" className="history-container d-flex align-items-center text-white">
      <motion.div
        className="container bg-opacity rounded-4 w-75 h-75 py-5 shadow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h1
          className="text-center mb-4 display-5 fs-1 text-white"
          custom={1}
          variants={fadeInUp}
        >
          Our History 
        </motion.h1>

        <motion.p className="fs-4 p-2 text-white" custom={2} variants={fadeInUp}>
          Techlynx innovations remains committed to its core values of innovation,
          customer-centricity, and excellence. We continue to invest in emerging
          technologies, nurture talent, and explore new markets, ensuring that we
          stay ahead of the curve and deliver value to our customers and stakeholders.
        </motion.p>

        <motion.p className="fs-4 p-2 text-white" custom={3} variants={fadeInUp}>
          Founded in 2025, our company started as a vision shared by a small group of
          passionate innovators. With dedication and creativity, we launched our first
          product aimed at simplifying everyday challenges.
        </motion.p>

        <motion.p className="fs-4 p-2 text-white" custom={5} variants={fadeInUp}>
          Today, we stand proud with a diverse team and a global presence, continuing
          our mission to shape the future through technology.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default History;
