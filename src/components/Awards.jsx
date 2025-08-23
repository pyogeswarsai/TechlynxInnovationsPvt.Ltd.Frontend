import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Awards.css';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Awards() {
  const awards = [
    "Best Tech Company 2025 - TechWorld Awards",
    "Innovation in AI - Global AI Forum",
    "Top Employer 2025 - WorkCulture Index",
    "Best Admiring Company - 2025"
  ];
  
  

  return (
    <section id="awards" className="awards-section d-flex justify-content-center align-items-center">
      <motion.div
        className="awards-container w-75 bg-dark bg-opacity-50 rounded-4 p-3 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 className="text-white mb-4 display-5 fs-1 pt-2" variants={itemVariants}>
          Awards & Recognitions
        </motion.h2>
        <ul className="list-unstyled">
          {awards.map((award, index) => (
            <motion.li
              key={index}
              className="mb-3 fs-4 award-item p-2"
              variants={itemVariants}
              whileHover={{
                scale: 1.0,
                boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.7)",
                transition: { duration: 0.3 },
              }}
             
            >
              {award}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Awards;
